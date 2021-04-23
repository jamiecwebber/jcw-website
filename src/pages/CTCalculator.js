import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import styled from 'styled-components';
import { PageFrame } from '../components/styles';
import { Link } from 'react-router-dom';
import { useAudio, AudioPanicButton } from '../contexts/AudioContext'

// THIS ENTIRE PAGE CAN BE REFACTORED, JUST TRYING TO MOVE THINGS AHEAD FIRST

const CSSWrapper = styled.div`
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
  
.controls {
    margin: 1rem;
    padding: 3rem;
}
  
input {
    margin: 3px;
}
`  

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

// GRID DISPLAY

const CTCGridCSS = styled.div`
    display: grid;

    .chime {
        margin: 2px;
        border: 1px solid gray;
        border-radius: 4px;
        height: 4rem;
        width: 4rem;
    }
  
    .gridRow {
        display: inline-block;
        grid-template-rows = 1fr;
        grid-template-colums = repeat(8, 4rem);
        grid-auto-flow: column;
        height: min-content;
        width: min-content;
    }
`

const NoteContainer = styled.div`
  
    display: grid;
    justify-items: center;
    align-items: center;

    .frequency {
        grid-column: 1 / 3;
        grid-row: 1;
    }
    .note {
        grid-column: 1;
        grid-row: 2 / 4;
        font-size: 1.6em;
        justify-self: end;
    }
    .cents {
        grid-column: 2;
        grid-row: 2;
    }
    .octave {
        grid-column: 2;
        grid-row: 3;
        font-size: 1.2em;
    }
`

const GridNote = ({frequency}) => {
  let midicents = frequencyToMidicents(frequency);
  
  let cents = Math.round(midicents % 100);
  if (cents > 50) cents -= 100;
  
  let semitone = Math.round(midicents / 100);
  let octave = Math.floor(semitone/12) - 1;
  let notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  let note = notes[semitone % 12];
  
  return (
    <NoteContainer>
      <div className='frequency'>{Math.floor(frequency)}</div>
      <div className='note'>{note}</div>
      <div className='cents'>
        {cents >= 0 ? ' +' : ' -'}{Math.abs(cents)}
      </div>
      <div className='octave'>{octave}</div>
    </NoteContainer>
  )
}

const GridChime = ({frequency}) => {

    const [synth, setSynth] = useState();
    const [synthFrequency, setSynthFrequency] = useState(frequency);

    // these parts can be refactored out so both GridChime and StaffChime use the same synth (DRY)

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
          <GridNote frequency={frequency}/>
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
      <CTCGridCSS>
        <div className='CTCGrid'>
           { 
          gridRows.map((r) => {
            return (
              <div className='gridRow'>
                {gridColumns.map((c) => {
                  return(
                      <GridChime frequency={(gridSize-c-1)*melody + r*bass}/>
                      )
                })}
              </div>
            )
          })
          }
        </div>
      </CTCGridCSS>
  )
}


// CONTROLS AND FULL PAGE

export const CTCalculator = () => {
  const [melodyMIDI, setMelodyMIDI] = useState(52);
  const [bassMIDI, setBassMIDI] = useState(47);
  const [size, setSize] = useState(9);
  const [view, setView] = useState('grid');
  
  const handleMelodyChange = (event) => {
    setMelodyMIDI(event.target.value);
  }
  
  const handleBassChange = (event) => {
    setBassMIDI(event.target.value);
  }
  
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  }

  const toggleView = () => {
      view === 'grid' ? setView('staff') : setView('grid');
  }
  
  return (
    <PageFrame>
        <CSSWrapper>
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
                        <input type="range" min="1" max="20" value={size} class="slider" onChange={handleSizeChange} id="gridSizeSlider"/>
                        Grid Size: {size}
                    </div>
                      <button onClick={toggleView}>TOGGLE VIEW {view}</button>
                </div>
                {view === 'grid' ?
                      <CTCGrid gridSize={size} melody={midiToFrequency(melodyMIDI)} bass={midiToFrequency(bassMIDI)} /> :
                      <div> STAFF </div>
                }
            </div>
        </CSSWrapper>
        <Link to="/">Home</Link>
    </PageFrame>
  )
}
