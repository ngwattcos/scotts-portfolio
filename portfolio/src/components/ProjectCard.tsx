import React from 'react';
import { Properties} from 'csstype';
import EnterView from './sensors/EnterView';
import Fade from './transitions/Fade';
import MouseOver from './sensors/MouseOver';

type Props = {
  heading?: string,
  image?: string,
  children?: React.ReactNode,
  delay?: number,
  width?: number,
  height?: number,
}

type State = {
  visible: boolean,
  hovered: boolean,
  expanded: boolean,
}

export default class ProjectCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      hovered: false,
      expanded: false,
    };
  }
  render() {
    const width = this.props.width || 1;
    const height = this.props.height || 1;


    const imageProps: Properties = {
      // width: "1in",
      // height: "1in",
      // borderRadius: "50%",
      backgroundImage: `url(${this.props.image})`,
      // backgroundSize: "cover",
      // use class to define cover vs contain
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
      <Fade enterDelay={this.props.delay}>
        
        <MouseOver onMouseOver={(hovered) => {

        }}>
          <div style={imageProps}></div>
          <div className="grid-cell-about-heading">{this.props.heading}</div>
          <div className="grid-cell-about-body">{this.props.children}</div>
        </MouseOver>
        
      </Fade>
      
    )
  }
}