import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="Album Cover" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_songIcons">
          <PlayCircleFilled className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
      </div>

      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
    </div>
  );
}

export default Body;
