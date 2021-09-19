import "./App.css";
import Welcome from "./components/welcome/welcome";
import Login from "./components/login/login";
import Subscribe from "./components/subscribe/subscribe";
import Mapview from "./components/mapview/mapview";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
	return (
			<Router>
				<Route exact path='/' component={() => <Welcome />} />
				<Route exact path='/login' component={() => <Login />} />
				<Route exact path='/subscribe' component={() => <Subscribe />} />
				<Route exact path='/viewmap' component={() => <Mapview />} />
			</Router>
	);
}
