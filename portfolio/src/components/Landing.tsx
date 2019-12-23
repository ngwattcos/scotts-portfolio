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
              {links.map(link => 
                <span>
                  &nbsp;&nbsp;&nbsp;&#x7c;&nbsp;&nbsp;&nbsp;
                  <a className="link-white link-unformatted" href={`#${link.anchor}`}>{link.anchor}</a>
                </span>
              )}

              {/* <a className="link-white" href="/login">login</a>&nbsp;&nbsp;|&nbsp;&nbsp; */}
              {/* <a className="link-white" href="/register">sign up</a> */}
            </div>
          </div>
          
          
        </div>
      </div>
    )
  }
}