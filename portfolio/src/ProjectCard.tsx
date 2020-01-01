import React from 'react';
import Card from './components/Card';

type Props = {
  title: string,
  children?: React.ReactNode,
}

export default class ProjectCard extends React.Component<Props> {
  render() {
    return (
      <div className="project-card">
        <div className="card-heading">{this.props.title}</div>
        {/* <hr /> */}
        <div>{this.props.children}</div>
      </div>
    )
  }
}