import './BlogList.css';
import BlogSummary from './BlogSummary';
import { useState } from 'react';

const BlogList = (props) => {

    const [clickCount, setClickCount] = useState(0);

    return (<div className="blog_list">
        <h1>Blog List: {clickCount}</h1>
        {
        // props.list.map(item => item)
        props.list.map((item, index) => {
            return <BlogSummary setClickCount={setClickCount} key={index} author={item.author} title={item.title} date={item.date} url={item.url}/>;
        })
        }
    </div>);
};

export default BlogList;