import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'

type Anchor = {
  anchor: string
}


export const links: Anchor[] = [
  { anchor: "about"},
  { anchor: "experience"},
  { anchor: "projects"},
  { anchor: "experiments"},
]

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="cust-navbar">
        <div className="cust-navbar-content">
          {links.map(link => <div className="cust-navbar-item">
            <Link className="link-unformatted link-black" to={`${link.anchor}`}>
              <div>#{link.anchor}</div>
            </Link>
          </div>
            )}
        </div>
        
      </div>
    )
  }
}
