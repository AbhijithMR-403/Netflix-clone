import './main.css'
import Card from '../card/Card'
import { API_KEY} from '../../constants/constants'

function Main() {
    return (
        <div>
            <div className="location" id="home">
                <h1 id="home">Popular on Netflix</h1>
                <Card url={`movie/now_playing?api_key=${API_KEY}`} size={13} />
              </div>

      <h1 id="tvShows">TV Shows</h1>
      <Card url={`movie/popular?api_key=${API_KEY}`} size={7} />
      
      
      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <Card url={`movie/upcoming?api_key=${API_KEY}`} size={13} />
      

      <h1 id="originals">Netflix Originals</h1>
      <Card url={`movie/top_rated?api_key=${API_KEY}`} size={7} />
      
      </div>
    )
}

export default Main