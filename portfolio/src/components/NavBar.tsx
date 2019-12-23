import React from 'react';

type Link = {
  anchor: string
}


export const links: Link[] = [
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
