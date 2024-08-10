import '../componentscss/header.css'
function Header(){
    return(
      <header className="hcomponent">
        <button><h3>Resources</h3></button>
        <button><h3>About Us</h3></button>
        <button><h3>Services</h3></button>
        <button><h3>Help</h3></button>
        <button><h3>Login/Signup</h3></button>
       
        </header>
    );
  }
  export default Header;