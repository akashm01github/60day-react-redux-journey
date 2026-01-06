import  './navbar.css'
const NavBar = () => {
  return (
    <div className='nav'>
        <div className="nav_logo">EV-Olution</div>
        <ul className='nav_menu'>
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='nav_contact'>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar