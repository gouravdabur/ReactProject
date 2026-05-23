// Drink.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Drink.css";

function Drink() {

  const dispatch = useDispatch();

  const drinkItems = [

    {
      id: 1,
      name: "Coca Cola",
      price: 40,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 2,
      name: "Pepsi",
      price: 35,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 3,
      name: "Sprite",
      price: 35,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 4,
      name: "Fanta",
      price: 40,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 5,
      name: "Orange Juice",
      price: 80,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 6,
      name: "Apple Juice",
      price: 85,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 7,
      name: "Mango Juice",
      price: 90,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 8,
      name: "Lemon Juice",
      price: 60,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 9,
      name: "Cold Coffee",
      price: 110,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 10,
      name: "Chocolate Shake",
      price: 120,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 11,
      name: "Vanilla Shake",
      price: 100,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 12,
      name: "Strawberry Shake",
      price: 110,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 13,
      name: "Milkshake",
      price: 95,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1553530666-ba11a90bb918?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 14,
      name: "Oreo Shake",
      price: 130,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 15,
      name: "Watermelon Juice",
      price: 75,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 16,
      name: "Pineapple Juice",
      price: 85,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 17,
      name: "Banana Shake",
      price: 90,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 18,
      name: "Lassi",
      price: 70,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 19,
      name: "Rose Milk",
      price: 80,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 20,
      name: "Green Tea",
      price: 60,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 21,
      name: "Black Coffee",
      price: 70,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 22,
      name: "Mojito",
      price: 140,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 23,
      name: "Energy Drink",
      price: 120,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=800&auto=format&fit=crop"
    },

    {
      id: 24,
      name: "Mineral Water",
      price: 20,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1564419434665-2b8e24d4c4b7?q=80&w=800&auto=format&fit=crop"
    }

  ];

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages =
    Math.ceil(drinkItems.length / itemsPerPage);

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentItems = drinkItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (

    <div className="drink-container">

      <h1>🥤 Drink Items</h1>

      <div className="drink-list">

        {currentItems.map((item) => (

          <div className="drink-card" key={item.id}>

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <p className="rating">
              ⭐⭐⭐⭐⭐ {item.rating}
            </p>

            <button
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
  Add To Cart
</button>

          </div>

        ))}

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (

          <button
            key={i}
            className={
              currentPage === i + 1
                ? "active"
                : ""
            }
            onClick={() =>
              setCurrentPage(i + 1)
            }
          >
            {i + 1}
          </button>

        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

    </div>

  );
}

export default Drink;