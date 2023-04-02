import Card from '../card/card';
import Data from '../../../assets/mockData';
import cls from './cardList.module.scss';

function CardList() {
  return (
    <div className={cls.wrapper}>
      <ul className={cls.card_container}>
        {Data &&
          Data.map((cart) => (
            <li key={cart.name}>
              <Card key={cart.name} data={cart} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CardList;
