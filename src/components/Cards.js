import { useState } from "react";
import Card from "../components/Card"

function Cards({data, startIndex, endIndex}) {

    const [layout, setLayout] = useState("full-width");

    const toggleLayout = (prevClass) => {
        setLayout((prevClass) => {
            if (prevClass === 'full-width') return 'grid';
            // if (prevClass === 'grid') return 'masonry';
            return 'full-width';
        });
    }

    return (
        <>
        <div className={`cards-wrapper ${layout}`}>
            {data.videos.slice(startIndex, endIndex).map((video, index) => (
                <Card data={video} key={index} cardKey={index} layout={layout} />
            ))}
        </div>
                    
                    
            <button className="full-width-btn mobile" onClick={() => {toggleLayout();}}>
                {layout === 'full-width' && (

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>  
                )}

                {layout === 'grid' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
                )} 

                {/* {layout === 'masonry' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rows-2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/></svg>
                )} */}
            </button>

        </>
    );
};

export default Cards;