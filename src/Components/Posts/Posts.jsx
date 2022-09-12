import React from 'react';

export const Posts = ({posts,loading,currentPosts }) => {

    if(loading){
        return <h2>Loading...</h2>;
    }

  return (
        <>
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
        </>

  );
}