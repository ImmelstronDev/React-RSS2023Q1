import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CardData } from 'modules/components/card/card';

import Modal from '../../modules/components/modal/modal';
import URLs from '../../constants/urlConst';
import Input from '../../modules/common/input/input';
import CardList from '../../modules/components/cardList/cardList';
import cls from './home.module.scss';
import { HomeContext, ModalState } from './context';

interface CardListState {
  data: CardData[] | null;
}

function Home(): JSX.Element {
  const key = 'search';
  const [cardListState, setCardListState] = useState<CardListState>({ data: null });
  const [isLoading, setLoading] = useState<boolean>(true);
  const [inputSearchState, setInputSearchState] = useState<string>(localStorage.getItem(key) ?? '');
  const [modalData, setModal] = useState<ModalState>({
    isModal: false,
    isLoading: false,
    id: null,
  });

  const refInputSearchValue = useRef<string>(localStorage.getItem(key) ?? '');

  const { isModal } = modalData;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${URLs.BASE_URL}?q=${inputSearchState}`);
        const prodData = await res.json();
        setCardListState((old) => ({ ...old, data: prodData }));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [inputSearchState]);

  const handleSubmit = () => {
    if (inputSearchState === refInputSearchValue.current) return;
    setInputSearchState(refInputSearchValue.current);
    localStorage.setItem(key, inputSearchState);
    setLoading(true);
  };

  const handleOpenModal = useCallback((id: number) => {
    const nextModalState = { isModal: true, isLoading: true, id };
    setModal(nextModalState);
  }, []);

  const handleCloseModal = useCallback(() => {
    const nextModalState = {
      isModal: false,
      isLoading: false,
      id: null,
    };
    setModal(nextModalState);
  }, []);

  const initialContext = useMemo(
    () => ({
      handleOpenModal,
      handleCloseModal,
      modalData,
    }),
    [handleOpenModal, handleCloseModal, modalData]
  );

  return (
    <HomeContext.Provider value={initialContext}>
      <div className={cls.all_wrapper}>
        <Input refValue={refInputSearchValue} handleSubmit={handleSubmit} />
        {isLoading ? <div>Loading...</div> : <CardList data={cardListState.data} />}
      </div>
      {isModal && <Modal modalData={modalData} />}
    </HomeContext.Provider>
  );
}
export default Home;
