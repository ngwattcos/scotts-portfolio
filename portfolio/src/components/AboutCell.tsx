import React from 'react';
import { Properties} from 'csstype';
import EnterView from './sensors/EnterView';
import { timingSafeEqual } from 'crypto';

type Props = {
  heading?: string,
  image?: string,
  children?: React.ReactNode,
  delay?: number,
}

type State = {
  visible: boolean,
}

export default class AboutCell extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    const imageProps: Properties = {
      width: "1in",
      height: "1in",
      borderRadius: "50%",
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "cover",
      border: "10px solid #eeeeee",
      margin: "0 auto",
      marginBottom: "0.5in",
    }

    const outViewProps: Properties = {
      opacity: "10%",
    }

    const inViewProps: Properties = {
      opacity: "100%",
    }

    let viewProps = outViewProps;

    const { visible } = this.state;

    return (
      <EnterView onChange={(visibility) => {
        if (this.props.delay) {
          setTimeout(() => {
            this.setState({visible: visibility});
          }, this.props.delay);
        } else {
          this.setState({visible: visibility});
        }
        

      }}>
        <div className={`grid-cell-about ${visible ? "visible" : "invisible"}`}>
          <div style={imageProps}></div>
          <div className="grid-cell-about-heading">{this.props.heading}</div>
          <div className="grid-cell-about-body">{this.props.children}</div>
        </div>
      </EnterView>
      
    )
  }
}