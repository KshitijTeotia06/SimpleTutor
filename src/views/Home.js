import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Particles from 'react-tsparticles';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <div style = {{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}>
        <iframe style = {{width: 800, height: 500}}src="https://calendar.google.com/calendar/embed?src=simpletutornp%40gmail.com&ctz=America%2FLos_Angeles"></iframe>
      </div>
       <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;