import React, {useState} from 'react';
import './assets/css/style.css';
import {Images} from './components/Images';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Gallery = () => {

    const [isShowing, setIsShowing] = useState(false);

    const Toggler = props => {
        return <div className="text-center">
            <button onClick={() => setIsShowing(!isShowing)} className="p-1 bg-blue-700 text-white my-2">
                Toggle
            </button>
        </div>
    }

    return (
        <section className="flex justify-center">
            <div className="w-10/12">
                <Images/>
                {/*<Toggler/>*/}
                {/*{ isShowing ? <Images/> : null}*/}
            </div>
        </section>
    );
}

const Home = () => {
    return <div className="flex h-screen">
        <h1 className="m-auto text-5xl">Welcome Home</h1>
    </div>
}

const Login = () => {
    return <div className="flex h-screen">
        <h1 className="m-auto text-5xl">Login</h1>
    </div>
}

const App = () => {

    return <Router>
        <Switch>
            <Route path={'/login'}>
                <Login/>
            </Route>
            <Route path={'/gallery'}>
                <Gallery/>
            </Route>
            <Route path={'/'}>
                <Home/>
            </Route>
        </Switch>
    </Router>
}

export default App;
