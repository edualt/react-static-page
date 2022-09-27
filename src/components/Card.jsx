import '../assets/styles/Card.css';


const Card=(props)=> {
    return (
        <div className="card">
            <div className="card_image">
                <a href='#'><img src={props.image} className="image" /></a>
            </div>
            <div className="card_content">
                <h3 className="card_title">{props.title}</h3>
                <p className="card_text">{props.text}</p>
            </div>
        </div>
    )

}

export default Card