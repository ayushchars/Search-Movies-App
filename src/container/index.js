import React,{useEffect,useState} from 'react'
import axios from "axios"
import './MovieList.css'
import SearchOutlined from "@material-ui/icons/SearchOutlined"
function Index() {
  const [search, setsearch] = useState([])
  const [movies, setmovies] = useState("")
  const [button, setbutton] = useState("titanic")
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=bf8f618b&s=${button}`)
    .then(res=>
      {
      console.log(res)
    
      
      if(res.data.Response === "False"){
        alert("no movie of this name")
      }

      else{setsearch(res.data.Search)}
    }
      )
      
      .catch(err=> 
        console.log(err))
  }, [button])
  const handle =()=>{
    setbutton(movies)
  }
 const  reloadPage= ()=> {
    window.location.reload()
  }
  return (
    <>
    <div className='Container_navbar'>
      <h1 className='logo' onClick={reloadPage}>MoviesHub</h1>

      <div className='input_flield'>
    <input type="text" value={movies} onChange={e=> setmovies(e.target.value)} className="input" placeholder='Search Movies...'/>
    <button onClick={handle} className="btn"><SearchOutlined/></button>
    </div>

      </div>

    <div>
      {search.map(item => 
      <div key={item.imdbID} className="container">
        
        <div className='container_item'>
        <img src={item.Poster} className="img" alt="poster"/>
        <h1 className='container_h1'>{item.Title}</h1>
        <p className='container_p'>{item.Year}</p>
        </div>
      </div>
      )}
      </div>
    </>
  )
}

export default Index