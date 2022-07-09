import '../styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {  
  return (<>
    <div className="home-screen">
      <div className="home-screen-elements">
        <h1 className="home-screen-text">Your one stop shop for Pokémon plushies!</h1>
        <Link to='/shop' className="btn btn-danger home-screen-button">Shop Now</Link>
      </div>
    </div>
  </>);
}

export default Home;