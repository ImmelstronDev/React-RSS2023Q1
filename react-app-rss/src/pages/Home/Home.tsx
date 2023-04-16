import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { dataSlice } from '../../store/reducers/DataSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Modal from '../../modules/components/modal/modal';
import URLs from '../../constants/urlConst';
import Input from '../../modules/common/input/input';
import CardList from '../../modules/components/cardList/cardList';
import cls from './home.module.scss';
import { HomeContext, ModalState } from './context';

// interface CardListState {
//   data: CardData[] | null;
// }

function Home(): JSX.Element {
  // const key = 'search';
  // const [cardListState, setCardListState] = useState<CardListState>({ data: null });
  const [isLoading, setLoading] = useState<boolean>(true);
  // const [inputSearchState, setInputSearchState] = useState<string>(localStorage.getItem(key) ?? '');
  const [modalData, setModal] = useState<ModalState>({
    isModal: false,
    isLoading: false,
    id: null,
  });

  const dispatch = useAppDispatch();
  const { cardData } = useAppSelector((state) => state.dataReducer);
  const { value } = useAppSelector((state) => state.searchReducer);
  const refInputSearchValue = useRef<string>('');

  const { isModal } = modalData;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${URLs.BASE_URL}?q=${value}`);
        const prodData = await res.json();
        dispatch(dataSlice.actions.writeDataCard(prodData));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [dispatch, value]);

  const handleSubmit = () => {
    if (value === refInputSearchValue.current) return;
    dispatch(searchSlice.actions.writeSearch(refInputSearchValue.current));
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
        {isLoading ? <div>Loading...</div> : <CardList data={cardData} />}
      </div>
      {isModal && <Modal modalData={modalData} />}
    </HomeContext.Provider>
  );
}
export default Home;
