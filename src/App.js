import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import Kronos from "../src/views/Kronos";
import Poseidon from "../src/views/Poseidon";
import Artemis from "../src/views/Artemis";
import Athena from "../src/views/Athena";
import Prototypes from "../src/views/Prototypes";

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
                    <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
         <AppRoute exact path="/Prototypes" component={Prototypes} layout={LayoutDefault} />
          <AppRoute exact path="/Artemis" component={Artemis} layout={LayoutDefault} />
          <AppRoute exact path="/Kronos" component={Kronos} layout={LayoutDefault} />
          <AppRoute exact path="/Poseidon" component={Poseidon} layout={LayoutDefault} />
          <AppRoute exact path="/Athena" component={Athena} layout={LayoutDefault} /> 
        </Switch>
      )} />
  );
}

export default App;