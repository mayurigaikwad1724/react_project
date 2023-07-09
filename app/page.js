import Header from './header.js';
import css from './globals.css';
import Movie_row from'./movie_row.js';
import Footer from './footer.js'


const Movies=[{id:"0",
               name:"Dear zindagi",
               date:"2016 • 2h 31m | Drama ,Romance", 
               Description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections"},
               {id:"0",
               name:"Brave",
               date:"2012 • 1h 33m | Adventurous, Comedy ", 
               Description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse"},
               {id:"0",
               name:"Moana",
               date:"2016 • 1h 47m | Adventurous, Comedy ",
               Description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.23"},
               {id:"0",
               name:"Mulan",
               date:"1998 • 1h 27m | Adventurous, Comedy ",
               Description:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process"},
               
               {id:"0",
               name:"He Named Me Malala",
               date:"2015 • 1h 28m | Biography, Documentary ",
               Description:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations."},
               
               {id:"0",
               name:"Soul Surfer",
               date:"2011 • 1h 52m | Drama, Biography, Family ",
               Description:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack."},
               
               {id:"0",
               name:"Bend it like beckham",
               date:"2002 • 1h 52m | Comedy, Drama & Romance",
               Description:"wo ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football."},
               
               {id:"0",
               name:"Into the wild",
               date:"2007 • 2h 28m | Adventure, Biography, Drama",
               Description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life."},
               
                {id:"0",
               name:"The Pursuit of Happyness",
               date:"2006 • 1h 57m | Drama, Biography",
               Description:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career"},
               
                {id:"0",
               name:"The Intouchables",
               date:"2011 • 1h 52m | Drama, Biography, Drama",
               Description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver"},
               ]
               
               
               
               
               
               
const App = () =>{
    return(
        <>
            <div className="row">
                <Header/>
                <Movie_row
                    image= <img src="Dear Zindagi.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[0]["name"]}</h1>
                    date={Movies[0]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[0]["Description"]}</p>
                   
                />
                <Movie_row
                    image= <img src="Brave.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[1]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                <Movie_row
                    image= <img src="Moana.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[2]["name"]}</h1>
                    date={Movies[2]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[2]["Description"]}</p>
                />
                <Movie_row
                    image= <img src="Mulan.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[3]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                <Movie_row
                    image= <img src="MALALA.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[4]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                
                <Movie_row
                    image= <img src="Soul Surfer.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[5]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                
                <Movie_row
                    image= <img src="Beckham.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[6]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                
                <Movie_row
                    image= <img src="Into the Wild.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[7]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                
                <Movie_row
                    image= <img src="The Pursuit OF HappyNess.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[8]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                <Movie_row
                    image= <img src="The Intouchables.png" class="image"/> 
                    movie=<h1 className="movie_name">{Movies[9]["name"]}</h1>
                    date={Movies[1]["date"]}
                    Title=<h3>Description</h3>
                    Description=<p className="movie_Description">{Movies[1]["Description"]}</p>
                />
                <Footer/>
            </div>
            
            
        </>
    );
};
export default App;


