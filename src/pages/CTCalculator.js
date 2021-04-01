import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
// import styled from 'styled-components';
import { PageFrame } from '../components/styles';
import { useAudio, AudioPanicButton } from '../contexts/AudioContext'


// const CTCalculator = () => {
//     const audioContext = useAudio();

//     return (
//         <>
//             <PageFrame>
//                 Goal for this page is to port in the ct grid from codepen
//                 {/* controls at top left */}
//                 {/* actual display grid */}
//             </PageFrame>
//         </>
//     )
// }

// export default CTCalculator


Tone.Master.volume.value = -10

let frequencyToMidicents = (frequency) => {
  // this calculation assumes A4 = 440Hz = 6900 MIDIcents
  // https://newt.phys.unsw.edu.au/jw/notes.html
  let midicents = 6900 + 1200 * Math.log(frequency/440) / Math.log(2);
  return midicents;
} 

let midiToFrequency = (midi) => {
  return Math.pow(2,((midi-69)/12)) * 440;
}

const Note = ({frequency}) => {
  let midicents = frequencyToMidicents(frequency);
  
  let cents = Math.round(midicents % 100);
  if (cents > 50) cents -= 100;
  
  let semitone = Math.round(midicents / 100);
  let octave = Math.floor(semitone/12) - 1;
  let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let note = notes[semitone % 12];
  
  return (
    <div className='noteContainer'>
      <div className='frequency'>{Math.floor(frequency)}</div>
      <div className='note'>{note}</div>
      <div className='cents'>
        {cents >= 0 ? ' +' : ' -'}{Math.abs(cents)}
      </div>
      <div className='octave'>{octave}</div>
    </div>
  )
}

const Chime = ({frequency}) => {

    const [synth, setSynth] = useState();
    const [synthFrequency, setSynthFrequency] = useState(frequency);

    useEffect(() => {
      const newSynth = new Tone.Synth().toMaster();
      newSynth.oscillator.type = 'sine';
      newSynth.envelope.attack = 0.4; 
      newSynth.envelope.decay = 1.0;
      newSynth.envelope.sustain = 0.5;
      newSynth.envelope.release = 1;
      
      setSynth(newSynth);
    }, [])
  
    useEffect(() => {
      setSynthFrequency(frequency);
    }, [frequency])
  
    const onClick = () => {
      synth.triggerAttackRelease(synthFrequency, 1)
    }
    
    if (frequency === 0) {
      return (
        <div className='chime'>
          &nbsp;
        </div>
      )
    } else {
      return (
        <div className='chime' onClick={onClick}>
          <Note frequency={frequency}/>
        </div>
      )
    }
}

const CTCGrid = ({gridSize, melody, bass}) => {
  const [gridRows, setGridRows] = useState([]);
  const [gridColumns, setGridColumns] = useState([]);
  
  useEffect(()=>{
    console.log('gridSize: ', gridSize);
    let newArray = []
    for (var i=0; i<gridSize; i++){
      newArray.push(i);
    }
    
    setGridRows(newArray);
    setGridColumns(newArray);
    
  },[gridSize]);
  
  return (
    <div className='CTCGrid'>
       { 
      gridRows.map((r) => {
        return (
          <div className='gridRow'>
            {gridColumns.map((c) => {
              return(
                  //<div>{r} {c}</div>
                  <Chime frequency={(gridSize-c-1)*melody + r*bass}/>
                  )
            })}
          </div>
        )
      })
      }
    </div>
  )
}

export const CTCalculator = () => {
  const [melodyMIDI, setMelodyMIDI] = useState(52);
  const [bassMIDI, setBassMIDI] = useState(47);
  const [gridSize, setGridSize] = useState(9);
  
  const handleMelodyChange = (event) => {
    setMelodyMIDI(event.target.value);
  }
  
  const handleBassChange = (event) => {
    setBassMIDI(event.target.value);
  }
  
  const handleGridSizeChange = (event) => {
    setGridSize(event.target.value);
  }
  
  return (
    <div className='container'>
      <div className='controls'>
        <div>
          <input type="range" min="1" max="108" value={melodyMIDI} class="slider" onChange={handleMelodyChange} id="melodySlider"/>
          Melody: MIDI note {melodyMIDI}
        </div>
        <div>
          <input type="range" min="1" max="108" value={bassMIDI} class="slider" onChange={handleBassChange} id="bassSlider"/>
          Bass: MIDI note {bassMIDI}
        </div>
        <div>
          <input type="range" min="1" max="20" value={gridSize} class="slider" onChange={handleGridSizeChange} id="gridSizeSlider"/>
          Grid Size: {gridSize}
        </div>
      </div>
      <CTCGrid gridSize={gridSize} melody={midiToFrequency(melodyMIDI)} bass={midiToFrequency(bassMIDI)}/>
    </div>
  )
}
