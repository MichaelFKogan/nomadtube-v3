import { useParams, Link } from 'react-router-dom';
import "../styles/continent.css"


function Continent() {

    const { continent } = useParams();
    const data = require(`../data/${continent}/${continent}.json`);

    return (
        <div className="continent-page">

        {/* <PageBanner title={data.name} imgRoute={country}/> */}
        <h1 class="continent-title">{data.name}</h1>

        {/* CITIES */}
            <div className='cities-wrapper'>
                {/* <Link to={`/${continent}/${country}`} className={`${country}-img background-img`}>
                    <div>{data.name}</div>
                </Link> */}
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