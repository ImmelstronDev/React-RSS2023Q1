import React, { ChangeEvent, Component, ReactNode } from 'react';

interface InputState {
  value: string;
}

interface InputProps {
  [key: string]: never;
}
class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { value: localStorage.getItem('key') ?? '' };

    this.onUnload = this.onUnload.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.onUnload);
  }

  componentWillUnmount(): void {
    const { value } = this.state;
    localStorage.setItem('key', value);
    window.removeEventListener('beforeunload', this.onUnload);
  }

  onUnload() {
    const { value } = this.state;
    localStorage.setItem('key', value);
  }

  changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    this.setState(() => {
      return { value };
    });
  }

  render(): ReactNode {
    const { value } = this.state;
    return (
      <div>
        <input type="text" value={value} onChange={this.changeHandler} />
      </div>
    );
  }
}

export default Input;
