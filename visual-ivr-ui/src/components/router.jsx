import * as React from "react";
import { Switch, Route, Router, useRouter, useLocation } from "wouter";
import IvrMenu from "../pages/ivr-menu";
import Appointment from "../pages/schedule-appointment";
import ComputerTablets from "../pages/computer-tablet";
import Computers from '../pages/computers';
import TechHome from '../pages/tech-home';
import ComputerType from '../pages/computer-type';
import ComputerInfo from "../pages/computer-info";
import ComputerTopIssues from "../pages/computer-top-issues";
import RepairFulfillment from "../pages/repair-fulfillment";
import SignIn from '../pages/sign-in';

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

const Scope = props => {
  const router = useRouter();
  const [parentLocation] = useLocation();

  const nestedBase = `${router.base}${props.base}`;

  // don't render anything outside of the scope
  if (!parentLocation.startsWith(nestedBase)) return null;

  // we need key to make sure the router will remount if the base changes
  return (
    <Router base={nestedBase} key={nestedBase}>
      {props.children}
    </Router>
  );
};

export default () => (
    <Switch>
      <Route path="/" component={IvrMenu} />
      {/* <Route path="/:conference"> {params => (<IvrMenu props={params} />)} </Route> */}
      <Route path="/computers-tablets" component={ComputerTablets} /> 
      <Route path="/computers-tablets/computers" component={Computers} />
      <Route path="/tech" component={TechHome} />
      <Route path="/sign-in" component={SignIn} /> 
      <Route path="/tech/computer-type" component={ComputerType} />
      <Route path="/tech/computer-info" component={ComputerInfo} />
      <Route path="/tech/computer-top-issues" component={ComputerTopIssues} />
      <Route path="/tech/repair-fulfillment" component={RepairFulfillment} />
      <Route path="/schedule-appointment" component={Appointment} />
    </Switch>
);
