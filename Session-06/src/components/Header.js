import React, {useState} from "react";

export const Header = () => {

  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
    setToggle(!toggle)
  }

  let style = {
    padding: "10px 40px", 
    fontSize: "20px", 
    cursor: "pointer"
  }

  return (
    <header className="header-container">
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png"
          alt="logo"
        />
      </div>

      <nav className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li><button onClick={handleClick} style={style}>{toggle? "Login" : "Logout"}</button></li>
        </ul>
      </nav>

      
    </header>
  );
};
