import "./Known.css";
function Known({ user }) {
  return (
    <div className="known">
      <li className="sideLeftPeople">
        <img src={user.Picture} alt="" className="sideLeftImg" />
        <span className="sideLeftName">{user.name}</span>
      </li>
    </div>
  );
}

export default Known;
