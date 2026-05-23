import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Chocolate.css";

function Chocolate() {

  const dispatch = useDispatch();

  const chocolateItems = [

    {
      id: 1,
      name: "Dairy Milk",
      price: 80,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 2,
      name: "KitKat",
      price: 40,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 3,
      name: "Ferrero Rocher",
      price: 250,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 4,
      name: "Dark Chocolate",
      price: 120,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 5,
      name: "White Chocolate",
      price: 110,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 6,
      name: "Chocolate Cake",
      price: 350,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 7,
      name: "Chocolate Muffin",
      price: 90,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 8,
      name: "Chocolate Donut",
      price: 70,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 9,
      name: "Chocolate Ice Cream",
      price: 150,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 10,
      name: "Chocolate Brownie",
      price: 130,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1606312619344-4b3b6f1d9d19?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 11,
      name: "Chocolate Shake",
      price: 160,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 12,
      name: "Chocolate Cookies",
      price: 100,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 13,
      name: "Chocolate Pastry",
      price: 120,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 14,
      name: "Chocolate Waffle",
      price: 180,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 15,
      name: "Nutella Jar",
      price: 320,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1612182062633-9ff3b3598d17?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 16,
      name: "Chocolate Pancake",
      price: 190,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 17,
      name: "Chocolate Truffle",
      price: 220,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 18,
      name: "Hot Chocolate",
      price: 140,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 19,
      name: "Chocolate Cupcake",
      price: 95,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 20,
      name: "Chocolate Bar",
      price: 60,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 21,
      name: "Chocolate Croissant",
      price: 170,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 22,
      name: "Chocolate Macaron",
      price: 210,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 23,
      name: "Chocolate Tart",
      price: 240,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=1000&auto=format&fit=crop"
    },

    {
      id: 24,
      name: "Chocolate Candy",
      price: 50,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1000&auto=format&fit=crop"
    }

  ];

  const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 8;

// Pagination

const totalPages = Math.ceil(chocolateItems.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;

const currentItems = chocolateItems.slice(
  startIndex,
  startIndex + itemsPerPage
);

return (

  <div className="chocolate-container">

    <h1>Chocolate 🍫</h1>

    {/* ITEMS */}

    <div className="chocolate-list">

      {currentItems.map((item) => (

        <div className="chocolate-card" key={item.id}>

          <img src={item.img} alt={item.name} />

          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <p className="rating">
            ⭐⭐⭐⭐⭐ {item.rating}
          </p>

          <button
            className="add-cart-btn"
            onClick={() => {

              dispatch(addToCart(item));

              toast.success(
                `${item.name} added to cart successfully!`,
                {
                  position: "top-right",
                  autoClose: 2000,
                }
              );

            }}
          >

            <i className="fas fa-cart-plus"></i>

            Add To Cart

          </button>

        </div>

      ))}

    </div>

    {/* PAGINATION */}

    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (

        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>

      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>

  </div>

);
}

export default Chocolate;