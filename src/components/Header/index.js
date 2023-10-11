import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        
       
      </ul>
     
    </div>
  </nav>
)

export default Header
