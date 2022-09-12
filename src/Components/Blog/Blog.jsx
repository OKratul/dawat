import { Pagination } from '../Pagination/Pagination';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Posts } from '../Posts/Posts';
import './Blog.css';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7b30326ab3msh5c1051ab94c4920p179294jsnfd9b3265310e',
      'X-RapidAPI-Host': 'cooking-recipe2.p.rapidapi.com'
    }
  };

  useEffect(()=>{
   setLoading(true);
    fetch(`https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts`,options)
    .then(res =>res.json())
    .then(data => setPosts(data))
    .catch(err=> console.Consolelog(err));
    setLoading(false);
  },[]);
  
  console.log(posts)
    const paginate= (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="blog" id='blog'>
          <div className="container">
            <div className='text-center'>
              <h2>
                Food Recipe
              </h2>
            </div>
            <div className="recipe-container mt-5">
                <Posts posts={posts} loading={loading} currentPosts={currentPosts}></Posts>
               
            </div>
            <div className='mt-4'>
              <Pagination 
              postPerPage={postPerPage} 
              totalPost={posts.length} 
              paginate={paginate}
              post={posts}
                ></Pagination>
            </div>
          </div>
      </div>
    </>
  )
}
