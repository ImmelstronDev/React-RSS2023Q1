import React, { Component } from 'react';
import Card, { CardData } from '../card/card';
import Data from '../../../assets/mockData';
import cls from './cardList.module.scss';

interface CardListProps {
  [key: string]: never;
}

interface CardListState {
  data: CardData[] | null;
}

class CardList extends Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(): void {
    this.setState({ data: Data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={cls.wrapper}>
        <ul className={cls.card_container}>
          {data?.map((cart) => (
            <Card key={cart.name} data={cart} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CardList;
