import { useState } from "react";
import Card from "../components/Card"

function Cards({data, startIndex, endIndex}) {

    const [fullWidth, setFullWidth] = useState(true);

    const toggleFullWidth = () => {
        setFullWidth(!fullWidth);
    }

    return (
        <>
        <div className={`cards-wrapper ${fullWidth ? "full-width" : ""}`}>
            {data.videos.slice(startIndex, endIndex).map((video, index) => (
                <Card data={video} key={index} cardKey={index} />
            ))}
        </div>
                    
                    
            <button className="full-width-btn mobile" onClick={() => {toggleFullWidth();}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>            
            </button>

            <button className="full-width-btn mobile" onClick={() => {toggleFullWidth();}} style={{right: "67px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
            </button>
        </>
    );
};

export default Cards;