import React from 'react';
import Typist from 'react-typist';
import { Properties} from 'csstype';
import AboutCell from './AboutCell';

import Card from './Card';

type Props = {
  children?: React.ReactNode,
}


export default class AboutPage extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="grid-container">
          <AboutCell heading="CS Student" image=""></AboutCell>
          <AboutCell heading="Engineer" image="">
            I invented something once. Read about it here!
          </AboutCell>
          <AboutCell heading="Potato" image="">
            A potato's shape is amorphous, non-well-defined. So are my boundaries.
          </AboutCell>
        </div>
        <div>
          <Card title="whoami" padding="20px" width="4in" height="2in">
            {/* <span>I am a...</span> */}
            <Typist cursor={{
              blink: true,
            }}>
              <div>...CS student @ Cornell</div>
              <div>...incoming Google SWE intern</div>
              <div>...student inventor</div>
            </Typist>
            
          </Card>
        </div>
        <div>

          <Card title="interests" padding="20px" width="4in" height="2in">
            {/* <span>I am a...</span> */}
            <Typist>...playing the cello</Typist>
            <Typist>...developing video games</Typist>
            <Typist>...gaming</Typist>
            interests
          </Card>
        </div>
        
      </div>
    )
  }
}