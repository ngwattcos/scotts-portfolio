import React from 'react';
import Typist from 'react-typist';
import * as CSS from 'csstype';

import Card from './Card';

type Props = {
  children?: React.ReactNode,
}

export default class AboutPage extends React.Component<Props> {
  render() {
    return (
      <div>
        <div>
          <Card title="whoami" padding="20px" width="4in" height="2in">
            {/* <span>I am a...</span> */}
            <Typist>...incoming Google SWE intern</Typist>
            <Typist>...CS student @ Cornell</Typist>
            <Typist>...student inventor</Typist>
          </Card>
        </div>
        <div>

          <Card title="interests" padding="20px" width="4in" height="2in">
            {/* <span>I am a...</span> */}
            <Typist>...playing the cello</Typist>
            <Typist>...developing video games</Typist>
            <Typist>...gaming</Typist>
            <Typist>Potato</Typist>
            <Typist>Potato</Typist>
            <Typist>Potato</Typist>
            interests
          </Card>
        </div>
        
      </div>
    )
  }
}