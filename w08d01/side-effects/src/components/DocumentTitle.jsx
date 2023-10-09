import {useEffect, useState} from 'react';

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('hello');

  useEffect(() => {
    console.log('updating the document title');
    document.title = `the count is ${count}`;
  }, [count]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      console.log('the count is', count);
    }, 3000);

    const cleanup = () => {
      console.log('running the clean up function');
      clearInterval(intervalRef);
    };

    return cleanup;
  }, [count]);

  return (
    <div>
      <h2>Document Title component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>increment!</button>

      <div>
        <label>Search Term</label>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
