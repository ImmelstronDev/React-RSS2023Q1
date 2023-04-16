import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { formSlice } from '../../store/reducers/FormSlice';
import Card from '../../modules/components/card/card';
import cls from './form.module.scss';

interface EL<P> {
  img: P;
  name: string;
  price: number;
  caliber: string;
  ammo: string;
  damage: number;
  distance: number;
  reload: number;
  radio: string;
  date: string;
  checkbox: boolean;
}

export default function NewForm(): JSX.Element {
  // const [data, setData] = useState<EL<string>[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EL<FileList>>();

  const dispatch = useAppDispatch();
  const { formData } = useAppSelector((state) => state.formReducer);

  const onSubmit = (el: EL<FileList>) => {
    const img = URL.createObjectURL(el.img[0]);
    const newEl: EL<string> = { ...el, img };
    dispatch(formSlice.actions.writeFormData(newEl));
    // data.push(newEl);
    // setData([...data]);
    reset();
  };

  const { name, onChange, ref } = register('name', {
    required: 'required to fill out',
  });
  const {
    name: priceName,
    onChange: priceChange,
    ref: priceRef,
  } = register('price', { valueAsNumber: true, required: 'required to fill out' });
  const {
    name: caliberName,
    onChange: caliberChange,
    ref: caliberRef,
  } = register('caliber', {
    required: 'you must choose a caliber',
  });
  const {
    name: ammoName,
    onChange: ammoChange,
    ref: ammoRef,
  } = register('ammo', {
    required: 'required to fill out',
  });
  const {
    name: damageName,
    onChange: damageChange,
    ref: damageRef,
  } = register('damage', { valueAsNumber: true, required: 'required to fill out' });
  const {
    name: distanceName,
    onChange: distanceChange,
    ref: distanceRef,
  } = register('distance', { valueAsNumber: true, required: 'required to fill out' });
  const {
    name: reloadName,
    onChange: reloadChange,
    ref: reloadRef,
  } = register('reload', { valueAsNumber: true, required: 'required to fill out' });
  const {
    name: imgName,
    onChange: imgChange,
    ref: imgRef,
  } = register('img', {
    required: 'you must upload an image',
  });
  const {
    name: dateName,
    onChange: dateChange,
    ref: dateRef,
  } = register('date', {
    required: 'you must select a creation date',
  });
  const {
    name: radioName,
    onChange: radioChange,
    ref: radioRef,
  } = register('radio', {
    required: 'you must choose',
  });
  const {
    name: checkName,
    onChange: checkChange,
    ref: checkRef,
  } = register('checkbox', {
    required: 'required to fill out',
  });

  return (
    <div className={cls.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            Name: <input type="text" id="name" name={name} onChange={onChange} ref={ref} />
          </label>
          <div className={cls.error}> {errors?.name && <p>{errors?.name?.message}</p>} </div>
        </div>
        <div>
          <label htmlFor="price">
            Price:
            <input
              type="number"
              id="price"
              name={priceName}
              onChange={priceChange}
              ref={priceRef}
            />
          </label>
          <div className={cls.error}>{errors?.price && <p>{errors?.price?.message}</p>}</div>
        </div>
        <div>
          <label htmlFor="caliber">
            Caliber:
            <select id="caliber" name={caliberName} onChange={caliberChange} ref={caliberRef}>
              <option value=""> select caliber</option>
              <option value="compact">compact</option>
              <option value="medium">medium</option>
              <option value="long">long</option>
            </select>
          </label>
          <div className={cls.error}>
            {' '}
            {errors?.caliber && <p> {errors?.caliber?.message} </p>}{' '}
          </div>
        </div>
        <div>
          <label htmlFor="ammunition">
            Ammunition:
            <input
              type="text"
              id="ammunition"
              name={ammoName}
              onChange={ammoChange}
              ref={ammoRef}
            />
          </label>
          <div className={cls.error}> {errors?.ammo && <p> {errors?.ammo?.message} </p>} </div>
        </div>
        <div>
          <label htmlFor="damage">
            Damage:
            <input
              type="number"
              id="damage"
              name={damageName}
              onChange={damageChange}
              ref={damageRef}
            />
          </label>
          <div className={cls.error}> {errors?.damage && <p> {errors?.damage?.message} </p>} </div>
        </div>
        <div>
          <label htmlFor="distance">
            Effective distance:
            <input
              type="number"
              id="distance"
              name={distanceName}
              onChange={distanceChange}
              ref={distanceRef}
            />
          </label>
          <div className={cls.error}>
            {' '}
            {errors?.distance && <p> {errors?.damage?.message} </p>}{' '}
          </div>
        </div>
        <div>
          <label htmlFor="reload">
            Reload:
            <input
              type="number"
              id="reload"
              name={reloadName}
              onChange={reloadChange}
              ref={reloadRef}
            />
          </label>
          <div className={cls.error}> {errors?.reload && <p> {errors?.reload?.message} </p>} </div>
        </div>
        <div>
          <label htmlFor="file">
            Image weapon:
            <input
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              name={imgName}
              onChange={imgChange}
              ref={imgRef}
            />
          </label>
          <div className={cls.error}> {errors?.img && <p> {errors?.img?.message} </p>} </div>
        </div>
        <div>
          <label htmlFor="createDate">
            Date of creation:
            <input
              type="date"
              id="createDate"
              name={dateName}
              onChange={dateChange}
              ref={dateRef}
            />
          </label>
          <div className={cls.error}> {errors?.date && <p> {errors?.date?.message} </p>} </div>
        </div>
        <div>
          {' '}
          Would you like to receive our newsletter?
          <label htmlFor="yes">
            Yes
            <input
              type="radio"
              id="yes"
              value="yes"
              name={radioName}
              onChange={radioChange}
              ref={radioRef}
            />
          </label>
          <label htmlFor="no">
            No
            <input
              type="radio"
              id="no"
              value="no"
              name={radioName}
              onChange={radioChange}
              ref={radioRef}
            />
          </label>
          <div className={cls.error}> {errors?.radio && <p> {errors?.radio?.message} </p>} </div>
        </div>
        <div>
          <label htmlFor="check">
            {' '}
            Confirmation to add to the armory list?
            <input
              type="checkbox"
              id="check"
              name={checkName}
              onChange={checkChange}
              ref={checkRef}
            />
          </label>
          <div className={cls.error}>
            {' '}
            {errors?.checkbox && <p> {errors?.checkbox?.message} </p>}{' '}
          </div>
        </div>
        <input type="submit" />
      </form>
      <div>
        {formData.map((card) => (
          <Card key={card.name} data={card} />
        ))}{' '}
      </div>
    </div>
  );
}
