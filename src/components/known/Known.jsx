import "./Known.css";
function Known({ user, openPop }) {
  return (
    <div className="known">
      <li className="sideLeftPeople">
        <img
          src={user.Picture}
          alt="user pic"
          className="sideLeftImg"
          onClick={openPop}
        />
        <span className="sideLeftName">{user.name}</span>
      </li>
    </div>
  );
}

export default Known;
