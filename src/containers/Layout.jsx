import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout=({ children })=>{
    return ( 
        <>
            <Header></Header>
            { children }
            <Footer></Footer>
        </>
    );
}

export default Layout;