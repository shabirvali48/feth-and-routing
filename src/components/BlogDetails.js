import React, {useState, useEffect} from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
    const [blog, setBlog] = useState({});
    const [loader, setLoader] = useState(false)
    const params = useParams();

    const {id} = params;


    useEffect(()=>{
        fetchBlog();
    }, []);

    const fetchBlog = async()=>{
        setLoader(true)
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
        const data = await response.json();
        setBlog(data)
        setLoader(false)
      
    }

  return (
    <div className='p-5'>
        {loader ? <Loader/> : (
            <div className='card p-3'>
                <h2>{blog.title}</h2>
                <div className='d-flex flex-row align-items-center'>
                    <img src={blog.avatar_url} className='w-25 rounded-circle' alt='avtar img'/>
                    <p>{blog.author}</p>
                </div>
                <img src={blog.image_url} className='' alt="imag"/>
                <p>{blog.content}</p>
            </div>
        )}
        

    </div>
  )
}