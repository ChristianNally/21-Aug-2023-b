import './App.css';

import Header from './components/Header';

const App = () => {
  const myObj = {a: 1, b: 2};

  return (
    <div className="App">
      <h2>App component</h2>

      <Header message="hello world" alt="good day" className="draft" />
      <Header message="about us" number={myObj} />
      <Header message="the products page" />

      <Header>
        <h2>More stuff</h2>
        <p>Does this work???</p>
      </Header>

    </div>
  );
};

// ECMAScript Modules (ESM)
export default App;
