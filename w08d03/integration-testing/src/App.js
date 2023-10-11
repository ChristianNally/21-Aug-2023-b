import React, {useEffect} from 'react';
import Header from './components/Header';
import Game from './components/Game';
import useApplicationData from './hooks/useApplicationData';
import {calcStatus, robotChoice} from './helpers/helpers';
import './App.scss';

const App = () => {
  const {
    state,
    setCompSelection,
    setPlayerSelection,
    toggleIsCheating
  } = useApplicationData();

  const status = calcStatus(state.playerSelection, state.compSelection);

  useEffect(() => {
    if (state.playerSelection) {
      const compSelection = robotChoice(state.playerSelection, state.isCheating);
      setCompSelection(compSelection);
    }
  }, [state.playerSelection, setCompSelection]);

  return (
    <div className="App">
      <Header options={state.options} />
      <Game
        state={state}
        status={status}
        setPlayerSelection={setPlayerSelection}
        toggleIsCheating={toggleIsCheating}
      />
    </div>
  );
};

export default App;
