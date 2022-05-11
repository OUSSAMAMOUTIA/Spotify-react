import SideBarOptions from "../sideBarOptions/SideBarOptions.js";
import "./SideBar.css";
import { Home } from "@material-ui/icons";
import { Search } from "@material-ui/icons";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../../context/DataLayer.js";
function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <SideBarOptions title="Home" Icon={Home} />
      <SideBarOptions title="Search" Icon={Search} />
      <SideBarOptions title="Your Library" Icon={LibraryMusic} />
      <br/>
      <strong className="sidebar_playlist_title">PLAYLISTS</strong>
      <hr/> 
      {playlists?.items?.map((playlist) => (
          <SideBarOptions title={playlist.name} />
        ))}
    </div>
  );
}
export default SideBar;
