import React from 'react';
import { Properties} from 'csstype';

type Props = {
  heading?: string,
  image?: string,
  children?: React.ReactNode,
}

export default class AboutCell extends React.Component<Props> {
  render() {
    const imageProps: Properties = {
      width: "1in",
      height: "1in",
      borderRadius: "50%",
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "cover",
      border: "10px solid #eeeeee",
      margin: "0 auto",
      marginBottom: "0.5in",
    }
    return (
      <div className="grid-cell-about">
        <div style={imageProps}></div>
        <div className="grid-cell-about-heading">{this.props.heading}</div>
      </div>
    )
  }
}