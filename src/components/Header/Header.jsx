import logo from '../../assets/logo.png'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <nav className="navbar h-100">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="trabook logo" />
        </a>
        <ul className="navbar-nav d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link fs-6" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item fs-6">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item fs-6">
            <a className="nav-link" href="#destination">Destination</a>
          </li>
          <li className="nav-item fs-6">
            <a className="nav-link" href="#tour">Tour</a>
          </li>
          <li className="nav-item fs-6">
            <a className="nav-link" href="#blog">Blog</a>
          </li>
        </ul>
        <ul
          className="navbar-nav d-flex flex-row align-items-center gap-4"
        >
          <li className="nav-item fs-6">
            <a className="nav-link accent-text" href="#">Login</a>
          </li>
          <li className="nav-item fs-6">
            <button className="d-inline-flex py-1 px-4 rounded-2 btn-sign">Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}