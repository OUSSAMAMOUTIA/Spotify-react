import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useDataLayerValue } from "../../context/DataLayer.js";
import "./Header.css";
function Header({spotify}) {
    const [{ user, }] = useDataLayerValue();

  return (
    <div className="header">
        <div className="header_left">
            <Search/>
            <input placeholder="Search for Artists, Songs, or Podcasts "
            type="text"
            />
        </div>
        <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}
export default Header