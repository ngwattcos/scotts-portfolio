import React from 'react';
import * as CSS from 'csstype';

type Props = {
  left: string,
  top: string,
  width: string,
  children?: React.ReactNode
}

export default class ParallaxElement extends React.Component<Props> {
  render() {
    const props: CSS.Properties = {
      left: this.props.left,
      top: this.props.top,
    }
    return (
      <div className="child-parallax" style={props}>{this.props.children}</div>
    );
  }
}