import image1 from '../assets/imgs/1.webp';
import image2 from '../assets/imgs/2.webp';
import image3 from '../assets/imgs/3.webp';
import image4 from '../assets/imgs/4.webp';
import image5 from '../assets/imgs/5.webp';
import image6 from '../assets/imgs/6.webp';
import image7 from '../assets/imgs/7.webp';
import image8 from '../assets/imgs/8.webp';
import image9 from '../assets/imgs/9.webp';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Layout from './Layout';

const cards = [{
    image: image1,
    title: "George Green",
    text: "Air Max 97 para mujer"
}, 
{
    image: image2,
    title: "Cobalt Bliss and Ashen Slate",
    text: "Jordan Delta 3 Low"
},
{
    image: image3,
    title: "Dark Driftwood",
    text: "Jordan Delta 3"
},
{
    image: image4,
    title: "Dirty Denim",
    text: "Air Max 1"
},
{
    image: image5,
    title: "Argon",
    text: "Dunk Low"
},
{
    image: image6,
    title: "Black and Light Steel",
    text: "Air Jordan 4"
},
{
    image: image7,
    title: "Starfish",
    text: "Air Jordan 1 para mujer"
},
{
    image: image8,
    title: "Taxi",
    text: "Air Jordan 1"
},
{
    image: image9,
    title: "Pink Black Patent",
    text: "Dunk Low para mujer"
}]

const App=()=>{
    return ( 
        <Layout>
            <div className='top'>
            <SearchBar></SearchBar>
            </div>
            <div className='grid'>
                {cards.map((card, index) => {
                    return <Card key={index} image={card.image} title={card.title} text={card.text}></Card>
                })}
            </div> 
        </Layout>

     );
}

export default App;