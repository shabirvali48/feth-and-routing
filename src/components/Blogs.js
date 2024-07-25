import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import axios from 'axios';
import BlogItem from './BlogItem';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loader, setLoader] = useState(false);


    useEffect(()=>{
       
        fetchBlogs()
    }, []);

    const fetchBlogs = async()=>{
        setLoader(true);
        const response = await axios.get("https://apis.ccbp.in/blogs");
        const data = await response.data;
        setBlogs(data);
        setLoader(false);
    };

    console.log(blogs);

  return (
    <div>
        {loader ? <Loader/> : (
            blogs.map(blog=>(
            <BlogItem blogDetails={blog} key={blog.id}/>
        )))}
    </div>
  )
}