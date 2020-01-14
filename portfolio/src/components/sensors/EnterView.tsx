import React from 'react';

type Props = {
  children?: React.ReactNode,
  onChange: (visible: boolean) => void,
}

export default class EnterView extends React.Component<Props> {
  selector: React.RefObject<HTMLDivElement>;

  inView: boolean;

  constructor(props: Props) {
    super(props);
    this.selector = React.createRef<HTMLDivElement>();

    this.inView = false;
  }

  isInView() {
    return this.inView;
  }

  checkInView = () => {
    if (this.selector && this.selector.current) {

      
      const top = this.selector.current?.getBoundingClientRect().top;
      const bottom = this.selector.current?.getBoundingClientRect().bottom;

      const inView = top >= 0 && bottom <= window.innerHeight;
      // if (!this.inView && inView) {
      //   this.onEnterView();
      // }
      // if (this.inView && !inView) {
      //   this.onExitView();
      // }

      if (this.inView != inView) {
        this.props.onChange(inView);
      }
      this.inView = inView;
    } else {

    }
  }

  onScroll = () => {
    this.checkInView();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <div ref={this.selector}>{this.props.children}</div>
    )
  }
}