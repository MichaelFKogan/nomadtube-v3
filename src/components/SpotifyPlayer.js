function SpotifyPlayer({openSpotify, toggleSpotifyPlayer}) {
    return(
    <>
    <div className={`spotify-player ${openSpotify ? "enter-left" : "exit-right"}`}>
        <div className="close-spotify-player-btn" onClick={toggleSpotifyPlayer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
        </div>
        <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/1WLRD3djOR3ANAWkwIdJvS?utm_source=generator&theme=0" width="100%" height="552" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
    </>
    )
}

export default SpotifyPlayer;