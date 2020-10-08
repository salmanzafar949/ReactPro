import React, {useState} from 'react';
import './assets/css/style.css';
import {Images} from './components/Images';

const App = () => {

    const [isShowing, setIsShowing] = useState(false);

  return (
    <section className="flex justify-center">
        <div className="w-1/2">
            <div className="text-center">
                <div className="my-4">
                    Hello
                </div>
                <button onClick={() => setIsShowing(!isShowing)} className="p-1 bg-blue-700 text-white my-2">
                    Toggle
                </button>
            </div>
            {
                isShowing ? <Images/> : null
            }
        </div>
    </section>
  );
}

export default App;
