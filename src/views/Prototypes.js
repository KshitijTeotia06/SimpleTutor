import React from 'react';
// import sections
import HeroSubteam from '../components/sections/HeroSubteam';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Typing from "../components/elements/Typing";
import Contact from "../components/sections/Contact";
import Auto from '../components/sections/Auto';
import FRCAbout from '../components/sections/FRCAbout';

const Prototypes = () => {
  const [num, setNum] = React.useState(100);
  const tileInput =[["Test1","2"],["3","4"],["5","6"]];
  return (
    <>
    {console.log(tileInput)}
      <HeroSubteam featureHeader = {tileInput} teamName="The Protoypes" className="illustration-section-01" />
      <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto mt-5" style = {{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', marginTop: -75, marginBottom: 20}}>
                
                <div className="flex flex-wrap -m-4 text-center float-center" style = {{overflow: "hidden"}}>
                  <div className="w-1/3 p-4" style = {{float: "left"}}>
                    <h2 className="text-3xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={35} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Competitions</p>
                  </div>

                  <div className="w-1/3 p-4" style = {{float: "left", marginRight: 200, marginLeft: 200}}>
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={125} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Members</p>
                  </div>

                  <div className="w-1/3 p-4" style = {{float: "left"}}>
                    <h2 className="text-4xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={13} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </h2>
                    <p className="leading-relaxed">Years</p>
                  </div>
                </div>
              </div>
            </section>

            <div style = {{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
        {/* <iframe style = {{width: 800, height: 500}}src="https://calendar.google.com/calendar/embed?src=simpletutornp%40gmail.com&ctz=America%2FLos_Angeles"></iframe> */}
      </div>

       {/* <FeaturesTiles /> */}
      <section>
        {/* <h1>
          Autonomous
        </h1> */}
                <Auto topDivider={true} useVideo={true} videoURL={"https://www.youtube.com/embed/u20f3Vbwvio"} header={"Autonomous"} description={'We have an autonomous routine that drops a cube that was loaded on into the top box, and then moves to the ramp. When the robot is on the ramp, we slowly creep up the ramp and auto align.'}/>

        <Auto topDivider={true} useVideo={false} header={"Teleoperated"} description={'Our game strategy for telop is to focus a lot on picking up cubes and depositing them as fast as possible. In addition, we will focus on the human player substation to get a lot of the game elements too.'}/>
        <Auto topDivider={true} useVideo={true} videoURL={"https://www.youtube.com/embed/ayUBQiOhlPs"} header={"End Game"} description={'Our end game strategy is to make sure we have enough time to balance on the ramp, as that is one of the major sources of points. We have developed an auto-align ramp feature that we will be using where it uses a PID to creep up a ramp and balance.'}/>
      </section>
      <FRCAbout invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Testimonial topDivider /> */}
      <Cta split />
      <Contact />
    </>
  );
}

export default Prototypes;