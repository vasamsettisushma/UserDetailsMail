import {Link} from 'react-router-dom'

const Home = () => (
    <div className="home-container">
     <li>
          <Link to="/send-email">
            <button>Click Here to Send Mail</button>
            </Link>
        </li>
    </div>
  )
  
  export default Home
  