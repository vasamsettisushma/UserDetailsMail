import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blog</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        
       
      </ul>
    </div>
  </nav>
)

export default Header
