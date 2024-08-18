import "../styles/card.css"
import { useState, useEffect, useRef } from "react";

function Card({ data, key, cardKey, layout }) {

    const [cardSize, setCurrentCardSize] = useState('normal');
    const [tabletSize, setTabletSize] = useState('tablet-normal');
    const [mobileSize, setMobileSize] = useState('mobile-normal');
    const [windowOpen, setWindowOpen] = useState('window-closed');
    const [windowSize, setWindowSize] = useState('window-m');
    const [vertical, setVertical] = useState('horizontal');

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

    const rotateCard = (prevClass) => {
        setVertical((prevClass) => {
            if (prevClass === 'horizontal') return 'vertical';
            if (prevClass === 'vertical') return 'horizontal';
        });
    }

    // Trigger the setAllHorizontal function when layout changes
    useEffect(() => {
        setVertical('horizontal');
        setMobileSize('mobile-normal');
        setCurrentCardSize('normal');
    }, [layout]); // Dependency array: runs whenever layout changes

    return (
        <div className={`card ${cardSize} ${tabletSize} ${mobileSize} ${windowOpen} ${windowSize} ${vertical} ${cardKey}`} key={key}>

            <div className='auto-resizable-iframe resize'>
                <button className="card-button close-card second-button" data-tooltip="Close" onClick = {() => {closeCard();rotateCard();}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x desktop"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x mobile"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                </button>
                <button className="card-button image-plus first-button" data-tooltip="Expand Image" onClick={increaseCardSize}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </button>
                <button className="card-button image-minus second-button" data-tooltip="Reduce Image" onClick={decreaseCardSize}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus"><path d="M5 12h14" /></svg>
                </button>
                <button className="card-button new-window second-button" data-tooltip="Picture In Picture" onClick={openNewWindow}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                </button>

                <button className="card-button rotate-card" data-tooltip="Rotate Card" onClick={rotateCard}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-redo"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
                </button>

                <div className='iframe-div'>

                    <div className='loading-text'
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '.9rem', fontWeight: "100", color: 'gray', fontFamily: "Edo" }}>
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