import logo from '../assets/imgs/logo.png';
import '../assets/styles/Header.css';

const Header=()=> {
    return (
        <header>
            <nav className='navigation'>
                <h1>KIKE<img className='imagen' src={logo}/></h1>
            </nav>
        </header>
      );
}

export default Header;