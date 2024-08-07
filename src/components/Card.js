import "../styles/card.css"
import { useState, useRef } from "react";

function Card({ data, key, cardKey }) {

    const [cardSize, setCurrentCardSize] = useState('normal');
    const [tabletSize, setTabletSize] = useState('tablet-normal');
    const [mobileSize, setMobileSize] = useState('mobile-normal');
    const [windowOpen, setWindowOpen] = useState('window-closed');
    const [windowSize, setWindowSize] = useState('window-m');

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
            return 'mobile-full';
        });

        setWindowSize((prevClass) => {
            if (prevClass === 'window-sm') return 'window-m';
            if (prevClass === 'window-m') return 'window-l';
            if (prevClass === 'window-l') return 'window-xl';
            return 'window-xl';
        });
    }

    const decreaseCardSize = () => {
        // Toggle between the classes 'small', 'medium', and 'large'
        setCurrentCardSize((prevClass) => {
            if (prevClass === 'large') return 'medium';
            if (prevClass === 'medium') return 'small';
            if (prevClass === 'small') return 'normal';
            return 'normal';
        });

        // Toggle between the classes 'small', and 'medium'
        setTabletSize((prevClass) => {
            if (prevClass === 'tablet-medium') return 'tablet-small';
            if (prevClass === 'tablet-small') return 'tablet-normal';
            return 'tablet-normal';
        });

        // Toggle between the classes 'normal', and 'full'
        setMobileSize((prevClass) => {
            if (prevClass === 'mobile-full') return 'mobile-normal';
            return 'mobile-normal';
        });

        setWindowSize((prevClass) => {
            if (prevClass === 'window-xl') return 'window-l';
            if (prevClass === 'window-l') return 'window-m';
            if (prevClass === 'window-m') return 'window-sm';
            return 'window-sm';
        });
    }

    const handleCardSizeNormal = () => {
        setCurrentCardSize('normal')
    }

    const iframeRef = useRef();

    const closeCard = () => {
        setCurrentCardSize('normal');
        setTabletSize('tablet-normal');
        setMobileSize('mobile-normal');
        setWindowOpen('window-closed');
        setWindowSize('window-m');
        if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    }

    const openNewWindow = () => {
        setWindowOpen("window-open");
        setWindowSize('window-m');
        setCurrentCardSize('normal');
        setTabletSize('tablet-normal');
        setMobileSize('mobile-normal');
    }

    return (
        <div className={`card ${cardSize} ${tabletSize} ${mobileSize} ${windowOpen} ${windowSize} ${cardKey}`} key={key}>

            <div className='auto-resizable-iframe resize'>
                <button className="card-button close-card second-button" data-tooltip="Close" onClick={closeCard}>x</button>
                <button className="card-button image-plus first-button" data-tooltip="Increase Image" onClick={increaseCardSize}>+</button>
                <button className="card-button image-minus second-button" data-tooltip="Decrease Image" onClick={decreaseCardSize}>-</button>
                <button className="card-button new-window second-button" data-tooltip="Open in window" onClick={openNewWindow}>^</button>

                <div className='iframe-div'>

                    <div className='loading-text' 
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1rem', color: 'gray'}}>
                        Loading...
                    </div>

                    <iframe
                        ref={iframeRef}
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