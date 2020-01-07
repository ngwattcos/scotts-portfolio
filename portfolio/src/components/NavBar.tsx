import React from 'react';
import * as CSS from 'csstype';

type Anchor = {
  anchor: string
}


export const links: Anchor[] = [
  { anchor: "about/blog"},
  { anchor: "skills"},
  { anchor: "experience"},
  { anchor: "projects"},
  { anchor: "experiments"},
]

type NavBarProps = {

}

type NavBarState = {
  hidden: boolean
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps, state: NavBarState) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  onScroll = () => {
    this.setState({
      hidden: window.scrollY <= document.documentElement.clientHeight / 2
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  render() {
    const height = "80px";
    const cssProps: CSS.Properties = {
      top: this.state.hidden ? `-${height}` : "0px",
      height: height,
    };

    return (
      <div className="cust-navbar" style={cssProps}>
        <div className="cust-navbar-content">
          {links.map(link => <div className="cust-navbar-item">
            <a className="link-unformatted link-black" href={`#${link.anchor}`}>
              <div>#{link.anchor}</div>
            </a>
          </div>
            )}
        </div>
        
      </div>
    )
  }
}
