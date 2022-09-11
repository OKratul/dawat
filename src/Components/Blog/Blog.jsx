import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Blog.css';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loding, setLoding] = useState(false);
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
   setLoding(true);
    fetch(`https://cooking-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts`,options)
    .then(res =>res.json())
    .then(data => setPosts(data))
    .catch(err=> console.Consolelog(err));
    setLoding(false);
  },[]);
  
  console.log(posts)
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
                {
                  currentPosts.map((post,pos) => {
                      return(
                          <div className='card' key={pos} > 
                              <div className='card-body'>
                                  <img src={post.img} alt="" className='img-fluid' />
                                <div className="card-text p-2">
                                  <div>
                                    <h4>
                                      Recipe: {post.title} ,
                                    </h4>
                                    <h5>
                                      Catagorie: {post.category}
                                    </h5>
                                    <button className='btn' type='button'>
                                      <a href={post.url} target="_blank">
                                        See Recipe
                                      </a>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              
                          </div>
                      )
                  })
                }
            </div>
          </div>
      </div>
    </>
  )
}
