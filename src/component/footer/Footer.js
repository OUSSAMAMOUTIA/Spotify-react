import "./Footer.css";
import {
  PlayCircleOutline,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { SkipPrevious } from "@material-ui/icons";
import { SkipNext } from "@material-ui/icons";
import { Shuffle } from "@material-ui/icons";
import { Repeat } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../../context/DataLayer.js";
import { useEffect } from "react";
function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };
  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_ALbum_logo" src="" alt="album" />
        <div className="footer_left_songInfo">
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" onClick={skipNext}/>
        <PlayCircleOutline fontSize="large" className="footer_icon" onClick={handlePlayPause} />
        <SkipNext className="footer_icon" onClick={skipPrevious}/>
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay  />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
