import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';
import { PageFrame } from '../components/styles'
import { useAudio, AudioPanicButton } from '../contexts/AudioContext';


const PitchPlayer = () => {
    
    console.log('render pitchplayer');
    const [frequency, setFrequency] = useState(220);
    const [volume, setVolume] = useState(50);

    const audioContext = useAudio();

    const oscillator = useRef(null);
    const gainNode = useRef(null);

    useEffect(() => {
        console.log("first useEffect");
        oscillator.current = audioContext.createOscillator();
        gainNode.current = audioContext.createGain();
        oscillator.current.type = 'triangle';
        oscillator.current.connect(gainNode.current);
        gainNode.current.connect(audioContext.destination);
        oscillator.current.start();
        const osc = oscillator.current;
        return () => { osc.stop(); }
    }, [audioContext]);

    useEffect(() => {
        console.log("second useEffect");
        gainNode.current.gain.setValueAtTime(volume / 100, audioContext.currentTime);
        oscillator.current.frequency.setValueAtTime(frequency, audioContext.currentTime); // value in hertz
    }, [frequency, volume, audioContext]);

    return (
        <PageFrame>
            <input type="range" min="1" max="2200" value={frequency} className="slider" id="frequencySlider" onChange={(e)=>{setFrequency(e.target.value)}}></input>
            <input type="range" min="1" max="100" value={volume} className="slider" id="volumeSlider" onChange={(e)=>{setVolume(e.target.value)}}></input>
            <AudioPanicButton>PANIC!!!</AudioPanicButton>
        </PageFrame>
    );
}

export default PitchPlayer;