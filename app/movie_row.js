import Action_row from './action_row.js'

const Movie_row =(props)=>{
    return (
        <>
             <div className="data_row">
                <div className="movie_image">
                   {props.image} 
                </div>
                <div className="movie_detail">
                    <div className="All_detail">
                        {props.movie}
                        {props.date}
                        {props.title}
                        {props.Description}
                    </div>
                    <Action_row/>
                </div>
             </div>
           
         </>
        
            
    )
}
export default  Movie_row;
