import React, {ReactNode, Component } from 'react';
import * as CSS from 'csstype';

type imageUrl = {
  url: string
}

// export default class Section extends React.Component {
//   constructor(props: React.Component) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="section-landing">

//       </div>
//     );
//   }
// }

type Props = {
  children: ReactNode,
  backgroundImage: string,
  height?: string
}

export default class Section extends Component<Props> {
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