import "./IconLeft.css";

function IconLeft({ icon, text }) {
  return (
    <div className="iconLeft">
      {icon}
      <span className="iconLeftText">{text}</span>
      <span className="iconLeftName">{text === "Logout" && "(Dil)"}</span>
    </div>
  );
}

export default IconLeft;
