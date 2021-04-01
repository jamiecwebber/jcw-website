import React, { useRef, useState } from 'react'

const AudioContext = React.createContext([{}, () => {}]);

const AudioContextProvider = (props) => {
    const audioContextRef = useRef(new window.AudioContext());
    // const [audioRefState, setAudioRefState] = useState(audioContextRef);

    return (
        <AudioContext.Provider value={ audioContextRef }>
            {props.children}
        </AudioContext.Provider>
    )
}

export function useAudio() { 
    const audioContextRef = React.useContext(AudioContext);
    return audioContextRef.current; 
};

export function useAudioRef() {
    const audioContextRef = React.useContext(AudioContext);
    return audioContextRef;
    // audioContextRef.current.close();
    // audioContextRef.current = new window.AudioContext();
}

export { AudioContextProvider }