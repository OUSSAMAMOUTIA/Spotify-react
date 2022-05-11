import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./api/spotify.js";
import "./App.css";
import { useDataLayerValue } from "./context/DataLayer.js";
import Login from "./pages/login/Login.js";
import Player from "./pages/player/Player.js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear the url after getting the token
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
      spotify.getPlaylist("3IdzXVxx6dc31uUP9C5ez2").then((response) => {
        dispatch({
          type: "SET_RANDOM_MUSICS",
          random_musics: response,
        })
      }
      )
    }
  }, []);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
