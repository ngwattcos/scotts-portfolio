import React from 'react'

type Props = {
  children?: React.ReactNode,
  onMouseOver: (hovered: boolean) => void,
}

export default class MouseOver extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  onMouseEnter() {
    this.props.onMouseOver(true);
  }

  onMouseLeave() {
    this.props.onMouseOver(false);
  }

  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.props.children}</div>
    )
  }
}