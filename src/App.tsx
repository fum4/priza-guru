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
            <h4>Salut, azi am instalat {count} prize</h4>
            {blurValue === 0 ? (
                <>
                    <h1 style={{ margin: 0 }}>🎉</h1>
                    <h4>Felicitǎri, ai montat toate prizele!</h4>
                </>
            ) : (
                <button onClick={handleClick}>Dǎ o prizǎ!</button>
            )}
            {prize.map(priza => (
                <img key={priza.id} src={priza.src} className="priza" alt="Falling prizǎ"
                     style={{left: `${priza.position}vw`}}/>
            ))}
        </div>
    </>
  )
}

export default App
