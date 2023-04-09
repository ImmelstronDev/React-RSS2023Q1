import React, { useEffect, useState } from 'react';
import { CardData } from 'modules/components/card/card';
import URLs from '../../constants/urlConst';
import Input from '../../modules/common/input/input';
import CardList from '../../modules/components/cardList/cardList';
import cls from './home.module.scss';

interface CardListState {
  data: CardData[] | null;
}

function Home(): JSX.Element {
  const [cardListState, setCardListState] = useState<CardListState>({ data: null });
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${URLs.BASE_URL}`);
        const prodData = await res.json();
        setCardListState((old) => ({ ...old, data: prodData }));
        console.log(cardListState);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  });
  return (
    <div className={cls.all_wrapper}>
      <Input />
      {isLoading ? <div>Loading...</div> : <CardList data={cardListState.data} />}
    </div>
  );
}
export default Home;
