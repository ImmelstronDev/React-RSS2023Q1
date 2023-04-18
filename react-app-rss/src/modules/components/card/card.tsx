import { useHomeContext } from '../../../pages/Home/context';
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
  id?: number;
}
interface CartDataProps {
  data: CardData;
}

function Card(props: CartDataProps): JSX.Element {
  const {
    data: { img, name, price, caliber, ammo, damage, distance, reload, id },
  } = props;

  const { handleOpenModal } = useHomeContext();

  return (
    <div
      className={cls.card}
      onClick={() => {
        handleOpenModal(id!);
      }}
    >
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

export default Card;
