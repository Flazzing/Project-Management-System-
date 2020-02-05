import React from "react";
import Cms from "./Cms";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login/index";

const App = () => (
	<div className="app-routes">
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/home" component={Cms} />
		</Switch>
	</div>
);

export default App;

// test if the import of firebase-data-display to the react-route-file to see if it works
// t
