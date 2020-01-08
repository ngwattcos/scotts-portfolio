import React from 'react';
import * as CSS from 'csstype';

type CardProps = {
  title?: string,
  background?: string,
  padding?: string,
  children?: React.ReactNode,
  width?: string,
  height?: string,
}

export default class Card extends React.Component<CardProps> {
  render() {
    const cssProps: CSS.Properties = {
      background: this.props.background,
      padding: this.props.padding,
      width: this.props.width,
      height: this.props.height,
    };

    return (
      
      <div className="shadow-window card">
        {this.props.title ?
          <div className="card-heading-1">{this.props.title}</div> : null
        }
        <div style={cssProps}>{this.props.children}</div>
      </div>
    )
  }
}