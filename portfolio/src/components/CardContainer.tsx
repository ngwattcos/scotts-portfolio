import React from 'react';
import * as CSS from 'csstype';

type CardContainerProps = {
  children?: React.ReactNode,
}

export default class CardContainer extends React.Component<CardContainerProps> {
  render() {
    return (
      <div className="card-container">
        {this.props.children}
      </div>
    )
  }
}