import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // runs code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    // removes visibility of token from the url
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);
      // console.log("Token:", token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      // my token = 37i9dQZEVXcOLzhlL5I4Ar
      // alt token = 37i9dQZEVXcIJazRV9ISoM
      spotify.getPlaylist("37i9dQZEVXcOLzhlL5I4Ar").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [token, dispatch]); // using `[]` will run the code inside only once when App loads

  console.log("Username: ", user);
  console.log("Token: ", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
