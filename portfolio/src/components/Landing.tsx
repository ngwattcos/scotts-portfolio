import React from 'react'
import {links} from './NavBar'

import { Link, animateScroll as scroll } from 'react-scroll'
// import * as CSS from 'csstype';

type LandingProps = {
  paddingTop?: string,
  paddingBottom?: string,
}

export default class Landing extends React.Component<LandingProps> {
  render() {
    // const cssProps: CSS.Properties = {
    //   paddingTop: `${this.props.paddingTop}`,
    //   paddingBottom: `${this.props.paddingBottom}`,
    // };

    return (
      <div className="landing-cover">
        <div className="landing-group">
          <div className="centered-custom">
            <div className="landing-hugetitle">Scott Wang</div>
            <div className="landing-normal">Incoming Google SWE Intern '20</div>
            <br />
            <div className="landing-small">
              {links.map(link => {
                return link.anchor === "about" ? (<span>
                  {/* <a className="link-white link-unformatted" href={`#${link.anchor}`}>{link.anchor}</a> */}
                  <Link className="link-white link-unformatted" to={`${link.anchor}`}>{link.anchor}</Link>
                </span>) : (<span>
                  &nbsp;&nbsp;&nbsp;&#x7c;&nbsp;&nbsp;&nbsp;
                  {/* <a className="link-white link-unformatted" href={`#${link.anchor}`}>{link.anchor}</a> */}
                  <Link className="link-white link-unformatted" to={`${link.anchor}`}>{link.anchor}</Link>
                </span>);
              })}


            </div>
          </div>
          
          
        </div>
      </div>
    )
  }
}