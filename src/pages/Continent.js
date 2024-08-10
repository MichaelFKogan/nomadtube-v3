import { useParams, Link } from 'react-router-dom';
import "../styles/continent.css"


function Continent() {

    const { continent } = useParams();
    const data = require(`../data/${continent}/${continent}.json`);

    return (
        <div className="continent-page">

            <h1 className="continent-title">{data.name}</h1>

            {/* CITIES */}
            <div className='cities-wrapper'>
                {data.cities.map((city, index) => (
                    <Link to={`/${continent}/${city.route}`} className={`${city.img}-img background-img`} key={index}>
                        <div>{city.name}</div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Continent;