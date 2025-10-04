import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <h1>My Online Store</h1>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#catalog">Catalog</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar


