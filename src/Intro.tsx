import { useState, useEffect } from 'react';
import rainSound from '/rain_sound.mp4';
import './style.css';

const audio = new Audio(rainSound);

const story = [
    "Într-o zi, Ticu, mare maestru în montat prize, primește un telefon urgent...",
    "„Avem o casă fără nicio priză funcțională!” se aude din centralǎ...",
    "„Hai te rog, nu mai fi pizdǎ! Mă pricep la orice priză!”",
    "„Nu e priză să mă învingă, cât de mare, cât de micǎ!”",
    "Printre scheme și bǎșini, se aude din vecini:",
    "„Ticule, n-ai terminat! Prizele au explodat!”",
];

export const Intro = ({ onStart }: { onStart: () => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0);    

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < story.length) {
                setCurrentIndex((currentIndex) => currentIndex + 1);
            } else {
                clearTimeout(timer)
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        audio.play();

        return () => audio.pause();
    }, []);
    
    return (
        <div className='intro-container'>
            <div className="story-container">
                {story.map((line, index) => (
                    <p
                        key={index}
                        className="story-text"
                        style={{
                            animationDelay: `${index * 3500}ms`,
                            opacity: currentIndex === index ? 1 : 0,
                        }}
                    >
                        {line}
                    </p>
                ))}
                {currentIndex >= story.length - 1 && (
                    <p className="final-sentence">
                        Alo, 112...?
                    </p>
                )}
            </div>
            {currentIndex >= story.length - 1 ? (
                <button 
                    onClick={onStart}
                    className='start-game-btn'
                >
                    Sǎ montǎm prize!
                </button>  
            ) : (
                <button 
                    onClick={onStart}
                    className='skip-btn'
                >
                    Skip
                </button>
            )}
        </div>
    );
}
