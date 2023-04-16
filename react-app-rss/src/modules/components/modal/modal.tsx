import dataApi from '../../../api/serviceApi';
import Portal from '../../../portal';
import { ModalState, useHomeContext } from '../../../pages/Home/context';
import cls from './modal.module.scss';

interface ModalProps {
  modalData: ModalState;
}

function Modal(props: ModalProps) {
  const {
    modalData: { id },
  } = props;

  const { isFetching, data } = dataApi.useFetchModalCardQuery(id);

  const { handleCloseModal } = useHomeContext();

  const modalCardData = data && data.length !== 0 ? data[0] : null;

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
            {modalCardData && !isFetching && (
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
            {isFetching ? <div>Loading...</div> : false}
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
