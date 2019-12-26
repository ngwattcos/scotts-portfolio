import React, {ReactNode, Component } from 'react';
import * as CSS from 'csstype';

type imageUrl = {
  url: string
}

type Props = {
  children: ReactNode,
  backgroundImage: string,
}

export default class ParallaxSection extends Component<Props> {
  render() {
    const cssProps: CSS.Properties = {
      backgroundImage: `url('${this.props.backgroundImage}')`
      // backgroundColor: "blue"
    };

    console.log(cssProps.backgroundImage);

    return (
      <div className="section" style={cssProps}>{this.props.children}</div>
    );
  }
}