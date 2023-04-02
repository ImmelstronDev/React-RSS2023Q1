import React from 'react';
import Input from '../../modules/common/input/input';
import CardList from '../../modules/components/cardList/cardList';
import cls from './home.module.scss';

function Home() {
  return (
    <div className={cls.all_wrapper}>
      <Input />
      <CardList />
    </div>
  );
}
export default Home;
