import "./Song.css"
function Song({track,playSong}) {
  return (
    <div className="song" onClick={() => playSong(track.id)}>
        <img
        className="song_image"
        src={track.album.images[0].url}
        alt=""
        />
        <div className="song_info">
            <h1>{track.name}</h1>
            <p>{track.artists.map((artist) => artist.name).join(", ")}
            {track.album.name}
            </p>
            </div> 
    </div>
  )
}
export default Song