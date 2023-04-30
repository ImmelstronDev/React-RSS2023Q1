import React, { ChangeEvent, MutableRefObject, useEffect, useState } from 'react';
import cls from './input.module.scss';
import { useAppSelector } from '../../../hooks/redux';

interface InputProps {
  refValue: MutableRefObject<string>;
  handleSubmit: () => void;
}

function Input(props: InputProps): JSX.Element {
  const { refValue, handleSubmit } = props;
  const { value } = useAppSelector((state) => state.searchReducer);
  const [searchStringValue, setValue] = useState<string>(value);

  useEffect(() => {
    refValue.current = searchStringValue;
  }, [searchStringValue, refValue]);

  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: searchValue } = e.target;
    setValue(searchValue);
  };

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && handleSubmit) handleSubmit();
  };

  return (
    <div className={cls.input_container}>
      <input
        type="text"
        className={cls.search_input}
        value={searchStringValue}
        onChange={handlerInput}
        onKeyDown={handlePressEnter}
        placeholder="What are you looking for?"
      />
    </div>
  );
}

export default Input;
