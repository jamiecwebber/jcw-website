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

export { AudioContext, AudioContextProvider }