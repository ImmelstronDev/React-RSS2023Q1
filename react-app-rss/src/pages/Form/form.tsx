import { PureComponent, ReactNode } from 'react';
import cls from './form.module.scss';

class AddedForm extends PureComponent {
  render(): ReactNode {
    return (
      <div className={cls.container}>
        <form>
          <div>
            <label htmlFor="name">
              Name: <input type="text" id="name" />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Price:
              <input type="number" id="price" />
            </label>
          </div>
          <div>
            <label htmlFor="caliber">
              Caliber:
              <select id="caliber">
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
              <input type="text" id="ammunition" />
            </label>
          </div>
          <div>
            <label htmlFor="damage">
              Damage:
              <input type="number" id="damage" />
            </label>
          </div>
          <div>
            <label htmlFor="distance">
              Effective distance:
              <input type="number" id="distance" />
            </label>
          </div>
          <div>
            <label htmlFor="reload">
              Reload:
              <input type="number" id="reload" />
            </label>
          </div>
          <div>
            <label htmlFor="file">
              Image weapon:
              <input type="file" id="file" />
            </label>
          </div>
          <div>
            <label htmlFor="createDate">
              Date of creation:
              <input type="date" id="createDate" />
            </label>
          </div>
          <div>
            {' '}
            Would you like to receive our newsletter?
            <label htmlFor="yes">
              Yes
              <input type="radio" name="receive" id="yes" />
            </label>
            <label htmlFor="no">
              No
              <input type="radio" name="receive" id="no" />
            </label>
          </div>
          <div>
            <label htmlFor="check">
              {' '}
              Confirmation to add to the armory list?
              <input type="checkbox" id="check" />
            </label>
          </div>
        </form>
        <div>cards</div>
      </div>
    );
  }
}

export default AddedForm;
