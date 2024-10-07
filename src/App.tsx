import {useRef, useState} from 'react';
import guru from '/guru.jpg';
import priza from '/priza_1.webp';
import wrenchSound from '/wrench_sound.mp4';
import './style.css';

const audio = new Audio(wrenchSound);

function App() {
    const timerRef = useRef(0);
  const [count, setCount] = useState(0);
  const [prize, setPrize] = useState<{id: number; src: string, position: number}[]>([]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [blurValue, setBlurValue] = useState(50);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    const handleClick = () => {
        setCount((count) => count + 1);
        setPrize([...prize, { id: Date.now(), src: priza, position: Math.random() * 80 }]);
        setBlurValue((blurValue) => Math.max(0, blurValue - 1))

        if (blurValue === 1) {
            clearInterval(timerRef.current);
        }

        if (startTime === 0) {
            const now = Date.now();
            setStartTime(now);

            timerRef.current = setInterval(() => {
                setElapsedTime(Date.now() - now);
            }, 100);
        }

        if (!isPlayingSound) {
            audio.play();
            setIsPlayingSound(true);
            setTimeout(() => setIsPlayingSound(false), 27000);
        }
    }

    const handleReset = () => {
        setCount(0);
        setPrize([]);
        setBlurValue(50);
        setStartTime(0);
        setElapsedTime(0);
    }

  return (
    <>
        <div className='container'>
            <h4>Highscore: <span style={{ fontSize: 20, color: '#69e769'}}>{(elapsedTime / 1000).toFixed(1)}s</span></h4>
            <img
                src={guru}
                className="guru"
                alt="Guru"
                style={{
                    filter: `blur(${blurValue}px)`,
                    animation: `${blurValue === 0 ? 'shake 0.5s ease-in-out 3' : ''}`
                }}
            />
            <h4>{blurValue === 0 ? 'Felicitǎri, ai montat toate prizele!' : `Salut, azi am instalat ${count} prize`}</h4>
            <div style={{ height: 121, width: '80vw', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {blurValue === 0 ? (
                    <>
                        <h1 style={{margin: 0, marginBottom: 25}}>🎉</h1>
                        <button onClick={handleReset} style={{ display: 'flex', alignItems: 'center', gap: 10}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-rotate-ccw">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                                <path d="M3 3v5h5"/>
                            </svg>
                            Mai bagǎ prize
                        </button>
                    </>
                ) : (
                    <button style={{width: '100%'}} onClick={handleClick}>Dǎ o prizǎ!</button>
                )}
            </div>
            {prize.map(priza => (
                <img key={priza.id} src={priza.src} className="priza" alt="Falling prizǎ"
                     style={{left: `${priza.position}vw`}}/>
            ))}
        </div>
    </>
  )
}

export default App
