import React, {ReactNode, Component } from 'react';
import * as CSS from 'csstype';

type imageUrl = {
  url: string
}

type Props = {
  children: ReactNode,
  backgroundImage: string,
  minHeight?: string,
}

export default class ParallaxSection extends Component<Props> {
  render() {
    const cssProps: CSS.Properties = {
      backgroundImage: `url('${this.props.backgroundImage}')`,
      minHeight: this.props.minHeight || "0vh",
      // backgroundColor: "blue"
    };

    console.log(cssProps.backgroundImage);

    return (
      <div className="section-parallax" style={cssProps}>{this.props.children}</div>
    );
  }
}