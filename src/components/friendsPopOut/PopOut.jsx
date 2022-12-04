import "./PopOut.css";
import { Users } from "../../data";
import CloseIcon from "@mui/icons-material/Close";

function PopOut({ whichFriend, close }) {
  return (
    <div className="popOut">
      <div className="popOutContainer">
        <CloseIcon className="popOutClose" onClick={close} />
        <div className="popOutImg">
          <img src={whichFriend.currentSrc} alt="" />
          <h2>About Me</h2>
          {whichFriend.attributes.src !== undefined
            ? Users.map((obj) =>
                whichFriend.attributes.src.nodeValue.includes(obj.Picture) ? (
                  <>
                    <div className="popOutInfo">
                      <h3>Name: {obj.name}</h3> <h3>Email: {obj.email}</h3>
                    </div>
                  </>
                ) : null
              )
            : null}

          <h4 className="popOutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aspernatur reiciendis pariatur minima quae eum, ratione sed quasi
            soluta obcaecati.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PopOut;
