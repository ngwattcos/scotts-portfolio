import React, {ReactNode, Component } from 'react';
import * as CSS from 'csstype';

type Props = {
  title: string,
  id: string,
  children: ReactNode,
  backgroundImage?: string,
  backgroundColor?: string,
  minHeight?: string,
  padding?: string,
  paddingSide?: string,
  paddingTop?: string,
  paddingBottom?: string,
}

export default class Section extends Component<Props> {
  render() {
    const outerProps: CSS.Properties = {
      backgroundImage: `url('${this.props.backgroundImage}')`,
      backgroundColor: `${this.props.backgroundImage}`,
      minHeight: `${this.props.minHeight}`,
    };

    const innerProps: CSS.Properties = {
      padding: `${this.props.padding}`,
    }

    return (
      <div className="section" style={outerProps} id={this.props.id}>
        <div className="section-title">{this.props.title}</div>
        <div style={innerProps}>{this.props.children}</div>
      </div>
    );
  }
}