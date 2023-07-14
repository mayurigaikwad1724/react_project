"use client"
import { useState } from 'react';
import Header from './header.js'
import Movie_row from './movie_row.js'
import Footer from './footer.js'
import './globals.css'

const Movies=[{id:0,
               name:"Dear zindagi",
               date:"2016 • 2h 31m | Drama ,Romance", 
               Description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections",
               image:"Dear Zindagi.png"},
               
               {id:1,
               name:"Brave",
               date:"2012 • 1h 33m | Adventurous, Comedy ", 
               Description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse",
               image:"Brave.png"},
               
               {id:2,
               name:"Moana",
               date:"2016 • 1h 47m | Adventurous, Comedy ",
               Description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.23",
               image:"Moana.png"},
               
               {id:3,
               name:"Mulan",
               date:"1998 • 1h 27m | Adventurous, Comedy ",
               Description:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process",
               image:"Mulan.png"},
               
               {id:4,
               name:"He Named Me Malala",
               date:"2015 • 1h 28m | Biography, Documentary ",
               Description:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations.",
               image:"MALALA.png"},
               
               {id:5,
               name:"Soul Surfer",
               date:"2011 • 1h 52m | Drama, Biography, Family ",
               Description:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack.",
               image:"Soul Surfer.png"},
               
               {id:6,
               name:"Bend it like beckham",
               date:"2002 • 1h 52m | Comedy, Drama & Romance",
               Description:"wo ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.",
               image:"Beckham.png"},
               
               {id:7,
               name:"Into the wild",
               date:"2007 • 2h 28m | Adventure, Biography, Drama",
               Description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
               image:"Into the Wild.png"},
               
                {id:8,
               name:"The Pursuit of Happyness",
               date:"2006 • 1h 57m | Drama, Biography",
               Description:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career",
               image:"The Pursuit OF HappyNess.png"},
               
                {id:9,
               name:"The Intouchables",
               date:"2011 • 1h 52m | Drama, Biography, Drama",
               Description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver",
               image:"The Intouchables.png"},
               ];
               
   
   
const App = () =>{
    const[movie,setMovie]=useState(Movies);
    function handleDelete(id){
        const newMovielist=movie.filter((items)=>id !==items.id);
        setMovie(newMovielist)      
    };
    return(
        <>
            <div className="row">
                <Header/>
                {movie.map((item)=>(
                   <Movie_row
                    key={item.id}
                    data={item}
                    onDelete={()=>handleDelete(item.id)}                
                    />
                ))}
                <Footer/>
            </div>        
        </>
    );
};
export default App;
            
               
               
               
               

