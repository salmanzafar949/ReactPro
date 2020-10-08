import React, {useState} from 'react';
import './assets/css/style.css';
import {Images} from './components/Images';

const App = () => {

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
            <div className="text-center">
                <div className="my-4">
                    Hello React
                </div>
            </div>
            <Images/>
            {/*<Toggler/>*/}
            {/*{ isShowing ? <Images/> : null}*/}
        </div>
    </section>
  );
}

export default App;
