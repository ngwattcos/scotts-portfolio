import React from 'react';
import Typist from 'react-typist';
import { Properties} from 'csstype';
import AboutCell from './AboutCell';

import Card from './Card';
import EnterView from './sensors/EnterView';

type Props = {
  children?: React.ReactNode,
}

type AboutProp = {
  heading: string,
  body: React.ReactNode,
}

const aboutInfo: AboutProp[] = [
  {
    heading: "CS Student",
    body: null,
  },
  {
    heading: "Engineer",
    body: <div>I invented something once. Read about it <a className="link-unformatted" href="">here!</a></div>,
  },
  {
    heading: "Potato",
    body: <div>A potato's shape is not well defined. Neither are my boundaries.</div>,
  },
]


export default class AboutPage extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="grid-container-about">

          {
            aboutInfo.map((info, i) => <AboutCell heading={info.heading} delay={i * 150}>{info.body}</AboutCell>)
          }
          
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