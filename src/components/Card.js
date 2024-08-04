import "../styles/card.css"

function Card({ data, key, cardKey }) {

    return (
        <div className={`card ${cardKey}`} key={key}>

            <div className='auto-resizable-iframe resize'>
                <button className="image-plus">+</button>
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