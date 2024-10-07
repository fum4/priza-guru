import {useState} from "react";
import {Game} from "./Game.tsx";
import {Intro} from "./Intro.tsx";
import { Home } from "./Home.tsx";

export const App = () => {
    const [currentScreen, setCurrentScreen] = useState('home');

    return (
        <div className='container'>
            {currentScreen === 'play' ? (
                <Game />
            ) : currentScreen === 'intro' ? (
                <Intro onStart={() => setCurrentScreen('play')} />
            ) : (
                <Home onScreenChange={setCurrentScreen} />
            )}
        </div>
    )
}
