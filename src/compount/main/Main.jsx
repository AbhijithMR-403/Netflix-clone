import './main.css'
import Card from '../card/Card'
import { API_KEY} from '../../constants/constants'

function Main() {
    return (
        <div>
            <div className="location" id="home">
                <h1 id="home">Popular on Netflix</h1>
                <div className="box">
                <Card url={`movie/now_playing?api_key=${API_KEY}`} size={12} />
                </div>
            </div>

      <h1 id="tvShows">TV Shows</h1>
      <div className="box">
      <Card url={`movie/now_playing?api_key=${API_KEY}`} size={6} />
      </div>
      
      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div className="box">
      <Card url={`movie/now_playing?api_key=${API_KEY}`} size={6} />
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div className="box">
      <Card url={`movie/now_playing?api_key=${API_KEY}`} size={6} />
      </div>
      </div>
    )
}

export default Main