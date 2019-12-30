import React from 'react';
import * as CSS from 'csstype';

type Props = {
  title: string,
  id: string,
  children: React.ReactNode,
  backgroundImage?: string,
  backgroundColor?: string,
  backgroundGradient?: number,
  minHeight?: string,
  padding?: string,
  paddingSide?: string,
  paddingTop?: string,
  paddingBottom?: string,
}

export default class Section extends React.Component<Props> {
  render() {
    const outerProps: CSS.Properties = {
      backgroundColor: `${this.props.backgroundImage}`,
      minHeight: `${this.props.minHeight}`,
    };

    const innerProps: CSS.Properties = {
      padding: `${this.props.padding}`,
    }

    let gradientChoice = "";
    switch (this.props.backgroundGradient) {
      case 1:
        gradientChoice = "gradient1";
        break;
      default:
        gradientChoice = "gradient1";
        break;
    }
    

    return (
      <div className={`section ${gradientChoice}`} style={outerProps} id={this.props.id}>
        <div className="section-title">{this.props.title}</div>
        <div style={innerProps}>{this.props.children}</div>
      </div>
    );
  }
}