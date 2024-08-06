import "../styles/card.css"
import { useState } from "react";

function Card({ data, key, cardKey }) {

    const [cardSize, setCurrentCardSize] = useState('normal');
    const [tabletSize, setTabletSize] = useState('tablet-normal');
    const [mobileSize, setMobileSize] = useState('mobile-normal');

    const increaseCardSize = () => {
        // Toggle between the classes 'small', 'medium', and 'large'
        setCurrentCardSize((prevClass) => {
            if (prevClass === 'normal') return 'small';
            if (prevClass === 'small') return 'medium';
            if (prevClass === 'medium') return 'large';
            return 'large';
        });

        // Toggle between the classes 'small', and 'medium'
        setTabletSize((prevClass) => {
            if (prevClass === 'tablet-normal') return 'tablet-small';
            if (prevClass === 'tablet-small') return 'tablet-medium';
            return 'tablet-medium';
        });

        // Toggle between the classes 'normal', and 'full'
        setMobileSize((prevClass) => {
            if (prevClass === 'mobile-normal') return 'mobile-full';
            return 'tablet-full';
        });
    }

    return (
        <div className={`card ${cardSize} ${tabletSize} ${mobileSize} ${cardKey}`} key={key}>

            <div className='auto-resizable-iframe resize'>
                <button className="image-plus" onClick={increaseCardSize}>+</button>
                <div className='iframe-div'>

                    <div className='loading-text' 
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1rem', color: 'gray'}}>
                        Loading...
                    </div>

                    <iframe
                        width="560"
                        height="315"
                        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                                <a href=https://www.youtube.com/embed/${data.videoId}?enablejsapi=1>
                                    <img src=https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg alt='Generic alt' style="width:102%">
                                    <span style='font-size:45px;text-shadow: 1px 1px 0 rgba(0,0,0,1), 1px 1px 5px rgba(0,0,0,1)'>
                                    ▸
                                    </span>
                                </a>`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;