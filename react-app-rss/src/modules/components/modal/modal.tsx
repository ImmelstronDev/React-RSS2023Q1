import { useEffect, useState } from 'react';
import Portal from '../../../portal';
import URLs from '../../../constants/urlConst';
import { ModalState, useHomeContext } from '../../../pages/Home/context';
import { CardData } from '../card/card';
import cls from './modal.module.scss';

interface ModalProps {
  modalData: ModalState;
}

function Modal(props: ModalProps) {
  const {
    modalData: { id },
  } = props;
  const [modalCardData, setModalCardData] = useState<CardData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const { handleCloseModal } = useHomeContext();

  useEffect(() => {
    const getData = async (idCard: number) => {
      try {
        const res = await fetch(`${URLs.BASE_URL}?id=${idCard}`);
        const prodData = await res.json();
        setModalCardData({ ...prodData[0] });
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    if (id && isLoading) getData(id);
  }, [id, isLoading]);

  return (
    <Portal>
      <div className={cls.modal} onClick={handleCloseModal}>
        <div className={cls.overlay}>
          <div
            className={cls['modal-window']}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button type="button" className={cls.btn} onClick={handleCloseModal}>
              X
            </button>
            {modalCardData && !isLoading && (
              <div className={cls.card}>
                <img src={modalCardData.img} alt="weapon" />
                <div className={cls.description_container}>
                  <span>Name: {modalCardData.name}</span>
                  <span>price: {modalCardData.price}$</span>
                  <span>caliber: {modalCardData.caliber}</span>
                  <span>ammunition: {modalCardData.ammo}</span>
                  <span>damage: {modalCardData.damage}</span>
                  <span>effective distance: {modalCardData.distance}m</span>
                  <span>reload: {modalCardData.reload}s</span>
                </div>
              </div>
            )}
            {isLoading ? <div>Loading...</div> : false}
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
