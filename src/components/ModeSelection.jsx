import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './ModeSelection.css';

export default function ModeSelection({ setDifficulty1, setDifficulty2, mode, setMode, onFinish }) {
    const navigate = useNavigate();

    const [value, setValue] = useState(1);
    const [selectedHeuristic, setSelectedHeuristic] = useState('easy'); // Dodajte stanje za odabir heuristike

    useEffect(() => {
        if (value % 2 === 0) play();
    }, [value]);

    function onSubmit(e) {
        e.preventDefault();
        onFinish();
    }

    function play() {
        // Logika za reprodukciju
    }

    const covekracunar = () => {
        navigate(`/covekracunar/${selectedHeuristic}`);
        console.log(selectedHeuristic, " ovo je nesto za PROVERU ");
    };

    const handleHeuristicChange = (e) => {
        setSelectedHeuristic(e.target.value); // Ažurirajte ovo
        console.log(e.target.value, " ovo je nesto ");
    };

    return (
        <>
            <div className='global-form-div'>
                <form className="game-mode-form" onSubmit={onSubmit}>
                    {/* <h1 className='game-title'>Nine Man&apos;s Morris</h1> */}
                    <div className='mode-div'>
                        {(mode === 'human-ai' || mode === 'ai-ai') && (
                            <>
                                <p>Difficulty:</p>
                                <select className='mode-selection' onChange={handleHeuristicChange} >
                                    <option value='easy'>Lako</option>
                                    <option value='medium'>Srednje</option>
                                    <option value='hard'>Teško</option>
                                </select>
                            </>
                        )}
                        {mode === 'ai-ai' && (
                            <select className='mode-selection' onChange={(e) => setDifficulty2(e.target.value)}>
                                <option value='easy'>Lako</option>
                                <option value='medium'>Srednje</option>
                                <option value='hard'>Teško</option>
                            </select>
                        )}
                    </div>
                    {/* <p>Izaberite ko igra</p> */}
                    <select className='mode-selection' onChange={(e) => setMode(e.target.value)}>
                        <option value='human-human'>Čovek - Čovek</option>
                        <option value='ai-ai'>Računar - Računar</option>
                        <option value='human-ai'>Čovek - Računar</option>
                    </select>
                        <button onClick={() => {
                        setValue(value + 1);
                        if (mode === 'human-ai') {
                            covekracunar();
                        }
                    }} className="btn-96">
                        <span>Počni igru</span>
                    </button>
                    <br /><br />
                     {/* <p>Ili želite čovek racunar</p> */}
                    {/* <select className='mode-selection' onChange={handleHeuristicChange}>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select> */}

                    {/* <button onClick={covekracunar} className="btn-95">
                        <span>Covek-Racunar</span>
                    </button> */}
                </form>
            </div>
        </>
    );
}
