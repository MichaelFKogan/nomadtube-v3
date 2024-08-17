import Card from "../components/Card"

function Cards({data, startIndex, endIndex, numCardsToShow, loadMoreRef}) {

    return (
        <div className="cards-wrapper">
            {data.videos.slice(startIndex, startIndex + numCardsToShow).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}
            {numCardsToShow < endIndex - startIndex && (
                <div ref={loadMoreRef} className="load-more-cards" style={{ height: '20px', backgroundColor: 'transparent' }} />
            )}
        </div>
    );
};

export default Cards;