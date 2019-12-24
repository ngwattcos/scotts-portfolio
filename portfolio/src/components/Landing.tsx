import React from 'react'
import {links} from './NavBar'

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing-cover">
        <div className="landing-group section-centered">
          <div className="centered-custom">
            <div className="landing-hugetitle">Scott Wang</div>
            <div className="landing-normal">Incoming Google SWE Intern '20</div>
            <br />
            <div className="landing-small">
              {links.map(link => {
                return link.anchor === "about" ? (<span>
                  <a className="link-white link-unformatted" href={`#${link.anchor}`}>{link.anchor}</a>
                </span>) : (<span>
                  &nbsp;&nbsp;&nbsp;&#x7c;&nbsp;&nbsp;&nbsp;
                  <a className="link-white link-unformatted" href={`#${link.anchor}`}>{link.anchor}</a>
                </span>);
              })}


            </div>
          </div>
          
          
        </div>
      </div>
    )
  }
}