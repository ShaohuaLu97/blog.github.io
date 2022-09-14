import "./navbar.css"

export default function NavBar() {
  return (
    <div className='navbar'>
        <div className="topleft">
            <i class="navIcon fa-brands fa-square-facebook"></i>
            <i class="navIcon fa-brands fa-square-twitter"></i>
            <i class="navIcon fa-brands fa-square-instagram"></i>
            <i class="navIcon fa-brands fa-square-youtube"></i>
        </div>
        <div className="topright">
            <ul className="navlist">
                <li className="navBarItem">HOME</li>
                <li className="navBarItem">ABOUT</li>
                <li className="navBarItem">CONTACT</li>
            </ul>
        </div>
    </div>
  )
}
