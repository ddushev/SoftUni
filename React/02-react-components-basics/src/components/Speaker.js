export function Speaker(props) {
    return (
        <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-1.png" className="speaker-img" />
            <h3>{props.name}</h3>
            <p>{props.bio}</p>
            <ul className="speaker-social">
                <li><a href="#"><span className="ti-facebook"></span></a></li>
                <li><a href="#"><span className="ti-twitter-alt"></span></a></li>
                <li><a href="#"><span className="ti-linkedin"></span></a></li>
            </ul>
        </div>
    )
}