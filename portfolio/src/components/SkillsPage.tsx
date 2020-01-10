import React from 'react';
import Typist from 'react-typist';
import * as CSS from 'csstype';
import Card from './Card';

type Props = {
  children?: React.ReactNode,
}

export default class SkillsPage<Props> extends React.Component {
  render() {
    const containerProps: CSS.Properties = {
      textAlign: "center",
    }
    const cssProps: CSS.Properties = {
      backgroundImage: `url('./images/cow2a.png')`,
      // backgroundColor: "rgba(255, 0, 0, 0.2)",
      backgroundPosition: "center",
      backgroundSize: "contain",
      height: "3in",
      width: "5in",
      // position: "absolute",
      textAlign: "center",
      margin: "0 auto",
      // left: "50%",
      // right: "50%",
      transform: "translate(0%, -65%)",
    }
    
    return (
      <div style={containerProps}>
        <div style={cssProps}></div>
        <div className="section-title">skills</div>
      </div>
    )
  }
}