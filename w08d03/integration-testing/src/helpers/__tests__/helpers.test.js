import { calcStatus, robotChoice } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(calcStatus(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(calcStatus()).toBe('Waiting');
  });
});

describe('robotChoice function', () => {

  test('can choose a valid choice for the robot', () => {
    const cheating = false;
    const playerSelection = 'Axe';

    const actual = robotChoice(playerSelection, cheating);

    const options = ['Moai', 'Axe', 'Tree'];

    expect(options).toContain(actual);
  });

  test('if cheating is true, always returns the winning result', () => {
    const cheating = true;
    const playerSelection = 'Axe';

    const actual = robotChoice(playerSelection, cheating);

    expect(actual).toBe('Moai');
  });

});

describe('playing with functions', () => {

  test('can create fake functions', () => {
    const fakeFunc = jest.fn((photoId) => {
      return 'hello';
    });

    fakeFunc(2);

    expect(fakeFunc).toHaveBeenCalled();
    expect(fakeFunc).toHaveBeenCalledTimes(1);
    expect(fakeFunc).toHaveBeenCalledWith(2);
    expect(fakeFunc).toHaveReturnedWith('hello');
  });

});