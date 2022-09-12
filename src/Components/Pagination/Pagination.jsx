import React from 'react';
import './Pagination.css';


export const Pagination = ({postPerPage, totalPost, paginate, post}) => {

    const pageNumbers =[];
    
    for (let i = 0; i <= Math.ceil(totalPost / postPerPage); i++  ) {
            pageNumbers.push(i);
    }

  return (
    <>
        <div className='page'>
            <ul >
                {
                    pageNumbers.map(number => (
                        <li key={number} className='item'
                        >
                           <a onClick={()=> paginate(number) } href='#blog' className='link'>
                                {number}
                            </a>         
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
  )
}
