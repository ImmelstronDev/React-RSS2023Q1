import { PureComponent } from 'react';
import cls from './card.module.scss';

export interface CardData {
  img: string;
  name: string;
  price: number;
  caliber: string;
  ammo: string;
  damage: number;
  distance: number;
  reload: number;
}
interface CartDataProps {
  data: CardData;
}

class Card extends PureComponent<CartDataProps> {
  render() {
    const {
      data: { img, name, price, caliber, ammo, damage, distance, reload },
    } = this.props;

    return (
      <div className={cls.card}>
        <img src={img} alt="weapon" />
        <div className={cls.description_container}>
          <span>Name: {name}</span>
          <span>price: {price}$</span>
          <span>caliber: {caliber}</span>
          <span>ammunition: {ammo}</span>
          <span>damage: {damage}</span>
          <span>effective distance: {distance}m</span>
          <span>reload: {reload}s</span>
        </div>
      </div>
    );
  }
}

export default Card;
