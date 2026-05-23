import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import Chocolate from "./Chocolate";
import Milk from "./Milk";
import Drink from "./Drink.jsx";
import Cart from "./Cart.jsx";
import Orders from "./Orders.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

import "./App.css";

function App() {

  // ✅ Get logged-in user information from localStorage
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  // ✅ Logout function to clear logged-in user information
  let logout = () => {
    // Clear logged-in user information from localStorage
    localStorage.removeItem("loggedInUser");
    // refresh the page to update the login state
    window.location.reload();
  };

  // ✅ Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  return (
    
    <BrowserRouter>
     <nav className="navbar">
    
      

<h2 className="logo">
  <i className="fas fa-utensils icon"></i> Mystory
</h2>

<Link to="/" className="nav-link">
  <i className="fas fa-compass icon"></i> Home
</Link>

<Link to="/veg" className="nav-link">
  <i className="fas fa-seedling icon"></i> VegItem
</Link>

<Link to="/chocolate" className="nav-link">
  <i className="fas fa-ice-cream icon"></i> Chocolate
</Link>

<Link to="/milk" className="nav-link">
  <i className="fas fa-blender icon"></i> Milk
</Link>

<Link to="/nonveg" className="nav-link">
  <i className="fas fa-hotdog icon"></i> Non-VegItem
</Link>

<Link to="/drink" className="nav-link">
  <i className="fas fa-cocktail icon"></i> Drink
</Link>

{/* CART */}
<Link to="/cart" className="nav-link cart-link">
  <i className="fas fa-basket-shopping icon"></i>
  Cart
  <span className="cart-count">
    {cartItems.length}
  </span>
</Link>

<Link to="/orders" className="nav-link">
  <i className="fas fa-list icon"></i> Orders
</Link>

<Link to="/register" className="nav-link">
  <i className="fas fa-user-plus icon"></i> Register
</Link>

{
  user ? (
    <>
      <span className="welcome-text">
        Welcome {user.name}
      </span>

      <button onClick={logout}className="logout-btn">
        Logout
      </button>
    </>
  ) : (
    <Link to="/login" className="nav-link">  
      Login
    </Link>
  )
}

</nav>

      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
        <ToastContainer position="top-center" autoClose={2000}/>

      </div>
    </BrowserRouter>

  );
}

export default App;