import Card, { CardData } from '../card/card';
import cls from './cardList.module.scss';

interface CardListData {
  data: CardData[] | null;
}

function CardList(props: CardListData): JSX.Element {
  const { data } = props;
  return (
    <div className={cls.wrapper}>
      <ul className={cls.card_container}>
        {data &&
          data.map((cart: CardData) => (
            <li key={cart.name}>
              <Card key={cart.name} data={cart} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardList;
