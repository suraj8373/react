import react from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navbar =()=>{
    return(
        <>
            <div className='mainheadersection' >
            <nav className="container  navbar navbar-expand-lg navbar-light ">
  <NavLink className="navbar-brand" to="/"><img src='https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png' alt='ljgls'/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
      
        <NavLink className="nav-link" to="#">About</NavLink>
      </li>


      <li className="nav-item dropdown">
        <NavLink to="#" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For Men
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="../cat/mens-shoes">Men Shoes</a>
          <a className="dropdown-item" href="../cat/mens-watches">Watches</a>
          <a className="dropdown-item" href="../cat/mens-shirts">Shirts</a>
        </div>
      </li>

      <li className="nav-item dropdown">
        <NavLink to="#" className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For Men
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="../cat/womens-dresses">Dress</a>
          <a className="dropdown-item" href="../cat/womens-shoes">Shoes</a>
          <a className="dropdown-item" href="../cat/womens-watches">Watch</a>
          <a className="dropdown-item" href="../cat/womens-bags">Begs</a>
          <a className="dropdown-item" href="../cat/womens-jewellery">jewellery</a>
        </div>
      </li>




      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Electronics
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="../cat/laptops">Laptop</NavLink>
          <NavLink className="dropdown-item" to="./cat/smartphones">smartphones</NavLink>
          <NavLink className="dropdown-item" to="./cat/lighting">lighting</NavLink>
        </div>
      </li>


    


    
      <li  className="nav-item visiblity-hidden mr-sm-2">
        <NavLink className="nav-link" to="#">Contact</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <a href="#" className="cart" type="submit"> <span><i class="fa fa-shopping-bag" aria-hidden="true"></i></span> Cart</a>

      <button className="loginbtn" ><i class="fa fa-user-o" aria-hidden="true"></i> <span>Log in</span></button>
      
    </form>
  </div>
</nav>
            </div>
        </>
    )
}

export default Navbar;