import Body from "../../component/body/Body.js";
import Footer from "../../component/footer/Footer.js";
import SideBar from "../../component/sideBar/SideBar.js";
import "./Player.css";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar/>
        <Body spotify={spotify}/>
      </div>
      <Footer spotify={spotify}/>
    </div>
  )
}
export default Player