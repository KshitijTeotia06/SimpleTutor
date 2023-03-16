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

const Artemis = () => {
  const [num, setNum] = React.useState(100);
  return (
    <>
      <HeroSubteam teamName="18715 - Artemis" className="illustration-section-01" />
      <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto mt-5" style = {{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', marginTop: -75, marginBottom: 20}}>
                
                <div className="flex flex-wrap -m-4 text-center float-center" style = {{overflow: "hidden"}}>
                  <div className="w-1/3 p-4" style = {{float: "left"}}>
                    <h2 className="text-3xl font-medium text-black title-font sm:text-5xl">
                      <CountUp end={8} redraw={true}>
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
                      <CountUp end={30} redraw={true}>
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
                      <CountUp end={3} redraw={true}>
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

       <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
      <Contact />
    </>
  );
}

export default Artemis;