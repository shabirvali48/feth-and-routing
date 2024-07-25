import React from 'react'
import { Link } from 'react-router-dom'
export default function BlogItem(props) {
  const {blogDetails}=props;

  return (
  <Link to={`/blog/${blogDetails.id}`}>
  <div className='card m-5 p-3 d-flex flex-row'>
    <img src={blogDetails.image_url} className='w-25'alt='img'/>
     <div className='p-5'>
   <h4>{blogDetails.topic}</h4>
   <p>{blogDetails.title}</p>
   <div className='d-flex flex-row align-item-center'>
    <img src={blogDetails.avatar_url} className='w-25 rounded-circle' alt='avatar img'/>
    <p>{blogDetails.author}</p>
   </div>
     </div>
  </div>
  </Link>
  )
}
