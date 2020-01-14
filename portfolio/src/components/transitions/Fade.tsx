import React from 'react';
import EnterView from '../sensors/EnterView';

type Props = {
  children?: React.ReactNode,
  enterDelay?: number,
  exitDelay?: number,
}

type State = {
  visible: boolean,
}

export default class Fade extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <EnterView onChange={(visibility) => {
        if (visibility) {
          if (this.props.enterDelay) {
            setTimeout(() => {
              this.setState({visible: visibility});
            }, this.props.enterDelay);
          } else {
            this.setState({visible: visibility});
          }
        } else {
          if (this.props.exitDelay) {
            setTimeout(() => {
              this.setState({visible: visibility});
            }, this.props.exitDelay);
          } else {
            this.setState({visible: visibility});
          }
        }
        
      }}>
        <div className={this.state.visible ? "visible-fade" : "invisible-fade"}>{this.props.children}</div>
      </EnterView>
      
    )
  }
}