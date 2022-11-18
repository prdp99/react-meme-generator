import logo from "../images/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="icon" />
        <h3>Meme Generator</h3>
      </div>

      <h5 className="project-number">React Course - Project 3</h5>
    </header>
  );
}

export default Header;
