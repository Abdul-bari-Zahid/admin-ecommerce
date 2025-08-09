import './Header.css'
import Logo from '../../components/Logo/Logo'
import { CiSearch, CiUser } from 'react-icons/ci'

function Header() {
  return (
    <header id='header'>
      <div id="headerContainer">
        <div id="logoBox">
          <Logo />
        </div>
        <div id="searchBar">
          <input type="text" placeholder='Search User' id='searchInput'/>
          <CiSearch className='searchIcon'/>

        </div>
        <div id="profileIcon">
          <CiUser className='userIcon'/>
          <p>Abdul Bari</p>
        </div>
      </div>
    </header>
  )
}

export default Header