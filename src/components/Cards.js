import Card from "../components/Card"

function Cards({data, startIndex, endIndex}) {

    return (
        <div className="cards-wrapper">
            {data.videos.slice(startIndex, endIndex).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}
        </div>
    );
};

export default Cards;