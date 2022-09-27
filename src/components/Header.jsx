import '../assets/styles/Header.css';
import logo from '../assets/imgs/logo.png'

const Header=()=> {
    return (
        <header>
            <nav className='navigation'>
                <h1>KIKE<img className='imagen' src={logo}/></h1>
                {/* <ul>
                    <li><a href="/">Completed</a></li>
                    <li><a href="/">Incompleted</a></li>
                    <li><a href="/add">Add Task</a></li>
                </ul> */}
            </nav>
        </header>
      );
}

export default Header;