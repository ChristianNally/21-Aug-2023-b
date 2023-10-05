import './BlogSummary.css';
import { useState } from 'react';

const BlogSummary = (props) => {

    const [localCount, setLocalCount] = useState(0);

    const clickHandler = () => { 
        props.setClickCount( (prev) => prev + 1 );
        setLocalCount((prev) => prev + 1);
     };

    return (<div className="blog_summary">
        <h2>{ props.title }: {localCount}</h2>
        <p>By { props.author }</p>
        <p>Date: { props.date }</p>
        <a href={props.url}>Would You Like To Know More?...</a>
        <button onClick={clickHandler}>+1</button>
    </div>);
};

export default BlogSummary;