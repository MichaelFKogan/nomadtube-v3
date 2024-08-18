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
                <Card data={video} key={index} cardKey={index} />
            ))}
        </div>
                    
                    
            <button className="full-width-btn mobile" onClick={() => {toggleLayout();}}>
                {layout === 'full-width' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>  
                )}

                {layout === 'grid' && (
                    // <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-table-cells-merge"><path d="M12 21v-6"/><path d="M12 9V3"/><path d="M3 15h18"/><path d="M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rows-2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/></svg>
                )} 

                {layout === 'masonry' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rows-2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/></svg>
                )}
            </button>

        </>
    );
};

export default Cards;