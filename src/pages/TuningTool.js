import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';
import { PageFrame } from '../components/styles'
import { useAudio } from '../contexts/AudioContext';


const PitchPlayer = () => {
    const [frequency, setFrequency] = useState(220);
    const [volume, setVolume] = useState(50);

    const audioContext = useAudio();

    // const { audioContextRef } = audioContextRef.current;
    console.log(audioContext);
    const oscillator = useRef(audioContext.createOscillator());
    const gainNode = useRef(audioContext.createGain());

    useEffect(() => {
        oscillator.current.connect(gainNode.current);
        gainNode.current.connect(audioContext.destination);
        oscillator.current.start();
        const osc = oscillator.current;
        return () => { osc.stop(); }
    }, [audioContext]);

    useEffect(() => {
        gainNode.current.gain.setValueAtTime(volume / 100, audioContext.currentTime);

        oscillator.current.type = 'triangle';
        oscillator.current.frequency.setValueAtTime(frequency, audioContext.currentTime); // value in hertz

    }, [frequency, volume, audioContext]);

    return (
        <PageFrame>
            <input type="range" min="1" max="2200" value={frequency} className="slider" id="frequencySlider" onChange={(e)=>{setFrequency(e.target.value)}}></input>
            <input type="range" min="1" max="100" value={volume} className="slider" id="volumeSlider" onChange={(e)=>{setVolume(e.target.value)}}></input>
        </PageFrame>
    );
}

export default PitchPlayer;