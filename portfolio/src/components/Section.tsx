import React from 'react';
import * as CSS from 'csstype';

type Props = {
  title?: string,
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
      backgroundColor: `${this.props.backgroundColor}`,
      minHeight: `${this.props.minHeight}`,
    };

    const innerProps: CSS.Properties = {
      padding: `${this.props.padding}`,
    }

    let gradientChoice = "";
    switch (this.props.backgroundGradient) {
      case 1:
        gradientChoice = " gradient1";
        break;
      case 2:
        gradientChoice = " gradient2";
        break;
      default:
        gradientChoice = "";
        break;
    }
    

    return (
      <div className={`section shadow-rect${gradientChoice}`} style={outerProps} id={this.props.id}>
        {this.props.title ? <div className="section-title">{this.props.title}</div> : null}
        
        <div style={innerProps}>{this.props.children}</div>
      </div>
    );
  }
}