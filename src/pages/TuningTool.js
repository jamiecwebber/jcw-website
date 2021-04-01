import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';
import { PageFrame } from '../components/styles'
import { useAudio } from '../contexts/AudioContext';


const PitchPlayer = () => {
    const [frequency, setFrequency] = useState(220);
    const [volume, setVolume] = useState(50);

    const { audioContextRef } = useAudio();

    // const { audioContextRef } = audioContextRef.current;
    const oscillator = useRef(audioContextRef.current.createOscillator());
    const gainNode = useRef(audioContextRef.current.createGain());

    useEffect(() => {
        oscillator.current.connect(gainNode.current);
        gainNode.current.connect(audioContextRef.current.destination);
        oscillator.current.start();
        // const osc = oscillator.current;
        // return () => { osc.stop(); }
    }, []);

    useEffect(() => {
        gainNode.current.gain.setValueAtTime(volume / 100, audioContextRef.current.currentTime);

        oscillator.current.type = 'triangle';
        oscillator.current.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime); // value in hertz

    }, [frequency, volume]);

    return (
        <PageFrame>
            <input type="range" min="1" max="2200" value={frequency} class="slider" id="frequencySlider" onChange={(e)=>{setFrequency(e.target.value)}}></input>
            <input type="range" min="1" max="100" value={volume} class="slider" id="volumeSlider" onChange={(e)=>{setVolume(e.target.value)}}></input>
        </PageFrame>
    );
}

export default PitchPlayer;