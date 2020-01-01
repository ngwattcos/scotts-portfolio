import React from 'react';

type CardProps = {
  title: string,
  children?: React.ReactNode,
}

export default class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card-heading">{this.props.title}</div>
        {/* <hr /> */}
        <div>{this.props.children}</div>
      </div>
    )
  }
}