import './App.css';
import BlogSummary from './components/BlogSummary';
import BlogList from './components/BlogList';
import {useState} from 'react';

function App() {

  const [showList, setShowList] = useState(false);
  const [user,setUser] = useState('Monkey');

  const listOfBlogs = [
    {author: 'Dewey', title: 'Lawyers Make The Best Activists', date: '1999-01-01', url: 'http://example.com/lmtba.txt'},
    {author: 'Cheatem', title: 'Lawyers Make The Best Salaries', date: '1999-01-02', url: 'http://example.com/lmtbs.txt'},
    {author: 'How', title: 'Lawyers Make The Best Enemies', date: '1999-01-03', url: 'http://example.com/lmtbe.txt'},
  ];

  // const listOfBlogs = [
  //   <BlogSummary />,
  //   <BlogSummary title="two"/>,
  //   <BlogSummary />,
  // ];

  return (
    <div className="App">
      {/* <BlogSummary date="2023-01-01" title="Lorem Ipsum Monkey Fuzz" author="Nally" url="http://example.com/sailing.md"/> */}
      <h1>Blog</h1>
      <p>
        <input type="text" onChange={(event) => { setUser((prev) => { return event.target.value }) }} value={user} />
      </p>
      <p>Show The List: 
        <input 
          type="checkbox" 
          onChange={() => { setShowList((prev) => !prev) }} 
        />
      </p>
      { showList && <BlogList list={listOfBlogs} /> }
    </div>
  );
}

export default App;
