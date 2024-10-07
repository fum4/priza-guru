import { useState } from 'react';
import guru from '/guru.jpg';
import priza from '/priza_1.webp';
import wrenchSound from '/wrench_sound.mp4';
import './style.css';

function App() {
  const [count, setCount] = useState(0);
  const [prize, setPrize] = useState<{id: number; src: string, position: number}[]>([]);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

    const handleClick = () => {
        setCount((count) => count + 1);
        setPrize([...prize, { id: Date.now(), src: priza, position: Math.random() * 80 }]);

        if (!isPlayingSound) {
            const audio = new Audio(wrenchSound);
            audio.play();
            setIsPlayingSound(true);

            setTimeout(() => setIsPlayingSound(false), 27000);
        }
    }

  return (
    <>
      <div className='container'>
          <img src={guru} className="logo" alt="Guru" />
          <h4>Salut, azi am instalat {count} prize</h4>
          <button onClick={handleClick}>Dǎ o prizǎ!</button>
          {prize.map(priza => (
              <img key={priza.id} src={priza.src} className="priza" alt="Falling prizǎ" style={{left: `${priza.position}vw`}} />
          ))}
      </div>
    </>
  )
}

export default App
