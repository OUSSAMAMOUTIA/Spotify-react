import { loginUrl } from "../../api/spotify.js";
import "./Login.css";
function Login() {
  return (
    <div className="login">
        <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"/>
        <a href={loginUrl}>Login With Spotify</a>
    </div>
  )
}
export default Login