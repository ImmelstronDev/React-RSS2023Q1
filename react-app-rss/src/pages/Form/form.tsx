import React, { PureComponent, ReactNode } from 'react';
import Card from '../../modules/components/card/card';
import cls from './form.module.scss';

interface FormData {
  newImageURL: string | undefined | null;
  weaponsArr:
    | [
        {
          img: string;
          name: string;
          price: number;
          caliber: string;
          ammo: string;
          damage: number;
          distance: number;
          reload: number;
        }
      ]
    | [];
}

interface Elements {
  name: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  caliber: React.RefObject<HTMLSelectElement>;
  ammo: React.RefObject<HTMLInputElement>;
  damage: React.RefObject<HTMLInputElement>;
  distance: React.RefObject<HTMLInputElement>;
  reload: React.RefObject<HTMLInputElement>;
  img: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
  radioYes: React.RefObject<HTMLInputElement>;
  radioNo: React.RefObject<HTMLInputElement>;
  check: React.RefObject<HTMLInputElement>;
}
class AddedForm extends PureComponent<object, FormData> {
  formRef: React.RefObject<HTMLFormElement>;

  elements: Elements;

  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();

    this.state = {
      newImageURL: '',
      weaponsArr: [],
    };

    this.elements = {
      name: React.createRef(),
      price: React.createRef(),
      caliber: React.createRef(),
      ammo: React.createRef(),
      damage: React.createRef(),
      distance: React.createRef(),
      reload: React.createRef(),
      img: React.createRef(),
      date: React.createRef(),
      radioYes: React.createRef(),
      radioNo: React.createRef(),
      check: React.createRef(),
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage() {
    const uploadImage = this.elements.img.current?.files![0];
    const imageUrl = URL.createObjectURL(uploadImage as Blob | MediaSource);
    this.setState({ newImageURL: imageUrl });
  }

  showResult() {
    const { weaponsArr } = this.state;
    const { newImageURL } = this.state;
    (weaponsArr as [object]).push({
      img: newImageURL,
      name: this.elements.name.current?.value,
      price: Number(this.elements.price.current?.value),
      caliber: this.elements.caliber.current?.value,
      ammo: this.elements.ammo.current?.value,
      damage: Number(this.elements.damage.current?.value),
      distance: Number(this.elements.distance.current?.value),
      reload: Number(this.elements.distance.current?.value),
    });
    this.setState({ weaponsArr });
    this.formRef.current?.reset();
    this.setState({ newImageURL: '' });
  }

  render(): ReactNode {
    const { weaponsArr } = this.state;
    return (
      <div className={cls.container}>
        <form ref={this.formRef}>
          <div>
            <label htmlFor="name">
              Name: <input type="text" id="name" ref={this.elements.name} />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Price:
              <input type="number" id="price" ref={this.elements.price} />
            </label>
          </div>
          <div>
            <label htmlFor="caliber">
              Caliber:
              <select id="caliber" ref={this.elements.caliber}>
                <option value=""> select caliber</option>
                <option value="compact">compact</option>
                <option value="medium">medium</option>
                <option value="long">long</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="ammunition">
              Ammunition:
              <input type="text" id="ammunition" ref={this.elements.ammo} />
            </label>
          </div>
          <div>
            <label htmlFor="damage">
              Damage:
              <input type="number" id="damage" ref={this.elements.damage} />
            </label>
          </div>
          <div>
            <label htmlFor="distance">
              Effective distance:
              <input type="number" id="distance" ref={this.elements.distance} />
            </label>
          </div>
          <div>
            <label htmlFor="reload">
              Reload:
              <input type="number" id="reload" ref={this.elements.reload} />
            </label>
          </div>
          <div>
            <label htmlFor="file">
              Image weapon:
              <input
                type="file"
                id="file"
                ref={this.elements.img}
                accept="image/png, image/jpeg"
                onChange={this.handleUploadImage}
              />
            </label>
          </div>
          <div>
            <label htmlFor="createDate">
              Date of creation:
              <input type="date" id="createDate" ref={this.elements.date} />
            </label>
          </div>
          <div>
            {' '}
            Would you like to receive our newsletter?
            <label htmlFor="yes">
              Yes
              <input type="radio" name="receive" id="yes" ref={this.elements.radioYes} />
            </label>
            <label htmlFor="no">
              No
              <input type="radio" name="receive" id="no" ref={this.elements.radioNo} />
            </label>
          </div>
          <div>
            <label htmlFor="check">
              {' '}
              Confirmation to add to the armory list?
              <input type="checkbox" id="check" ref={this.elements.check} />
            </label>
          </div>
          <input type="button" value="Create Weapon" onClick={() => this.showResult()} />
        </form>
        <div>
          {weaponsArr.map((card) => (
            <Card key={card.name} data={card} />
          ))}{' '}
        </div>
      </div>
    );
  }
}

export default AddedForm;
