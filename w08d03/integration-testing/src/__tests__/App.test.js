import React from 'react';
import ReactDOM from 'react-dom'; 
import App from '../App';

import {render, prettyDOM, fireEvent} from '@testing-library/react';

it('renders without crashing', () => { 
  const div = document.createElement('div'); 
  ReactDOM.render(<App />, div); 
  ReactDOM.unmountComponentAtNode(div); 
});

describe('tests for the App component', () => {

  test('clicking on the robot head icon toggles the isCheating state', () => {
    const {debug, container, getByTestId} = render(<App />);
    // debug();

    const robotHeadIcon = getByTestId('robot-head');

    fireEvent.click(robotHeadIcon); // turned isCheating to true

    expect(robotHeadIcon).toHaveClass('cheating');

    fireEvent.click(robotHeadIcon); // turned isCheating to false

    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
