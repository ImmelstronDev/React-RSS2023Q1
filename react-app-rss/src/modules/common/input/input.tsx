import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import cls from './input.module.scss';

function Input() {
  const key = 'search';
  const [value, setValue] = useState<string>(localStorage.getItem(key) ?? '');
  const inputValue = useRef(value);

  useEffect(() => {
    return () => {
      localStorage.setItem(key, inputValue.current);
    };
  }, [key]);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);

  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: serchValue } = e.target;
    setValue(serchValue);
  };

  return (
    <div className={cls.input_container}>
      <input type="text" className={cls.search_input} value={value} onChange={handlerInput} />
    </div>
  );
}

export default Input;
