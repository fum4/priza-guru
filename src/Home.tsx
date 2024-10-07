export const Home = ({ onScreenChange }: { onScreenChange: (screen: string) => void }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, height: '100%' }}>
            <div style={{ position: 'relative' }}>
                <h1 style={{ marginBottom: 0, lineHeight: 0.9, position: 'absolute', bottom: 120, left: 63 }}>Prizǎ</h1>
                <h1 style={{ marginTop: 0, lineHeight: 0.9, fontSize: 93, fontWeight: 100 }}>Guru</h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center'}}>
                <button
                    onClick={() => onScreenChange('intro')}
                    style={{ width: 150 }}
                >
                    Story
                </button>
                <button
                    onClick={() => onScreenChange('play')}
                    style={{ width: 150 }}
                >
                    Play Game
                </button>
            </div>
        </div>
    )
}
