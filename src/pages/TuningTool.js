import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const PitchPlayer = () => {
    const [frequency, setFrequency] = useState(220);
    const [volume, setVolume] = useState(50);

    const audioCtx = useRef(new (window.AudioContext || window.webkitAudioContext)());
    const oscillator = useRef(audioCtx.current.createOscillator());
    const gainNode = useRef(audioCtx.current.createGain());

    useEffect(() => {
        oscillator.current.connect(gainNode.current);
        gainNode.current.connect(audioCtx.current.destination);
        oscillator.current.start();
    }, []);

    useEffect(() => {
        gainNode.current.gain.setValueAtTime(volume / 100, audioCtx.current.currentTime);

        oscillator.current.type = 'triangle';
        oscillator.current.frequency.setValueAtTime(frequency, audioCtx.current.currentTime); // value in hertz

    }, [frequency, volume]);

    return (
        <div>
            <input type="range" min="1" max="2200" value={frequency} class="slider" id="frequencySlider" onChange={(e)=>{setFrequency(e.target.value)}}></input>
            <input type="range" min="1" max="100" value={volume} class="slider" id="volumeSlider" onChange={(e)=>{setVolume(e.target.value)}}></input>
        </div>
    );
}

export default PitchPlayer;