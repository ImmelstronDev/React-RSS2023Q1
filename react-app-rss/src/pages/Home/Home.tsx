import React, { useCallback, useMemo, useRef, useState } from 'react';
import dataApi from '../../api/serviceApi';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Modal from '../../modules/components/modal/modal';
import Input from '../../modules/common/input/input';
import CardList from '../../modules/components/cardList/cardList';
import cls from './home.module.scss';
import { HomeContext, ModalState } from './context';

function Home(): JSX.Element {
  const [modalData, setModal] = useState<ModalState>({
    isModal: false,
    isLoading: false,
    id: null,
  });

  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.searchReducer);
  const refInputSearchValue = useRef<string>('');
  const { isFetching, data } = dataApi.useFetchAllCardsQuery(value);

  const { isModal } = modalData;

  const handleSubmit = () => {
    if (value === refInputSearchValue.current) return;
    dispatch(searchSlice.actions.writeSearch(refInputSearchValue.current));
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
        {isFetching ? <div>Loading...</div> : <CardList data={data!} />}
      </div>
      {isModal && <Modal modalData={modalData} />}
    </HomeContext.Provider>
  );
}
export default Home;
