import { Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://community.spotify.com/t5/image/serverpage/image-id/70575i0FEE8730666D755C/image-size/large?v=1.0&px=-1"
          alt="Album Cover"
        />
        <div className="footer_songInfo">
          <h4>Yeah</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline className="footer_icon" fontSize="large" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>

      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
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
