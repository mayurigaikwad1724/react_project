"use client"
import React, { useState } from 'react';

const Action_row =(props)=>{
         const [movies, setMovies] = useState(0);
         const like = () => {
             setMovies(movies + 1);
         };

         const dislike = () => {
             setMovies(movies - 1);
         };
         
         return(
             <>
                  <div className="actions">
                      <div className="like">
                          <button onClick={()=>props.handleLike(props.data)}> <img src="like_icon.svg" /></button>
                      </div>
                      <div className="rating">
                          <p className="num">{props.data.vote}</p>
                      </div>
                      <div className="dislike">
                          <button onClick={()=>props.handleDislike(props.data)} class="imge"><img src="dislike_icon.svg" /></button> 
                      </div>
                  </div>
             </>
    )

}
export default Action_row;




