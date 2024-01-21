import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [gameOptions, setGameOptions] = useState({
    players: 'human_vs_human',
    file: null,
    difficulty: 'easy',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGameOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const startGame = () => {
    // Implement logic to start the game based on gameOptions
    console.log('Game options:', gameOptions);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
    },
    h1: {
      color: '#333',
      marginBottom: '20px',
    },
    section: {
      margin: '10px 0',
    },
    select: {
      margin: '0 10px',
      padding: '10px',
      backgroundColor: '#silver',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      color: '#333',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '10px',
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      padding: '10px 20px',
      backgroundColor: '#ddd',
      border: '1px solid #ccc',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '10px',
      display: 'block',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Welcome to PyMlin Game</h1>
      <div style={styles.section}>
        <label>
          Select Difficulty:
          <select name="difficulty" value={gameOptions.difficulty} onChange={handleInputChange} style={styles.select}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="expert">Expert</option>
          </select>
        </label>
      </div>
     
      <div style={styles.linkContainer}>
        <Link to="/game" style={styles.link}>
          Human vs Human
        </Link>
        <Link to="/racunar" style={styles.link}>
          Computer vs Computer
        </Link>
        <Link to="/covekracunar" style={styles.link}>
          Human vs Computer
        </Link>
      </div>
      <div style={styles.section}>
        <button onClick={startGame} style={styles.button}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default HomePage;
