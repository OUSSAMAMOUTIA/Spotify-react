import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import { useDataLayerValue } from "../../context/DataLayer.js";
import Header from "../header/Header.js";
import Song from "../song/Song.js";
import "./Body.css";
function Body({ spotify }) {
  const [{ random_musics }, dispatch] = useDataLayerValue();
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:3IdzXVxx6dc31uUP9C5ez2`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={random_musics?.images[0].url} alt="" />
        <div className="body_info_text">
          <strong>PLAYLIST</strong>
          <h2></h2>
          <p>{random_musics?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_songs_icons">
          <PlayCircleFilled className="body_shuffle" onClick={playPlaylist} />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {random_musics?.tracks.items.map((item) => (
          <Song playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}
export default Body;
