import React, { useRef } from 'react'

const AudioContext = React.createContext([{}, () => {}]);

const AudioContextProvider = (props) => {
    const audioContextRef = useRef(new window.AudioContext());
    
    return (
        <AudioContext.Provider value={ { audioContextRef }}>
            {props.children}
        </AudioContext.Provider>
    )
}

export function useAudio() { 
    const { audioContextRef } = React.useContext(AudioContext);
    return audioContextRef.current; 
};

export { AudioContextProvider }