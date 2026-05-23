import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./NonVeg.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NonVeg() {

  const dispatch = useDispatch();
  const nonVegItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 180,
      rating: 4.5,
      img: "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"
    },
    {
      id: 2,
      name: "Mutton Curry",
      price: 250,
      rating: 4.7,
      img: "https://lh5.googleusercontent.com/proxy/fm5qZsQ1nm8HztsfW92BSx3XQKt1tl2miFs7fXnbRmwE5bmIR3ADNRXrG0h6fpcNpkggOK684pAHz0bkpBZTvZLVj8bIwot0-h0aDsU"
    },
    {
      id: 3,
      name: "Butter Chicken",
      price: 220,
      rating: 4.6,
      img: "https://sugarspunrun.com/wp-content/uploads/2025/04/Butter-chicken-1-of-1.jpg"
    },
    {
      id: 4,
      name: "Fish Fry",
      price: 160,
      rating: 4.2,
      img: "https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg"
    },

    {
      id: 5,
      name: "Chicken Tikka",
      price: 200,
      rating: 4.8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69-WGksylJ4k6444uDeH5u113Fof76g44Mw&s"
    },

    {
      id: 6,
      name: "Prawn Masala",
      price: 230,
      rating: 4.4,
      img: "https://www.gohealthyeverafter.com/wp-content/uploads/2023/02/Prawn-Masala-Fry-23.jpg"
    },

    {
      id: 7,
      name: "Egg Curry",
      price: 120,
      rating: 4.1,
      img: "https://www.spicebangla.com/wp-content/uploads/2024/08/Egg-Masala-Curry.webp"
    },

    {
      id: 8,
      name: "Chicken Fried Rice",
      price: 150,
      rating: 4.3,
      img: "https://i.ytimg.com/vi/lRzGgs6dK6g/hq720.jpg"
    },

    {
      id: 9,
      name: "Grilled Chicken",
      price: 210,
      rating: 4.9,
      img: "https://assets.epicurious.com/photos/5b843bce1abfc56568396369/1:1/w_2560%2Cc_limit/Grilled-Chicken-with-Mustard-Sauce-and-Tomato-Salad-recipe-2-22082018.jpg"
    },
{
  id: 10,
  name: "Chicken 65",
  price: 190,
  rating: 4.5,
  img: "data:image/jpeg;base64,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"
},

{
  id: 11,
  name: "Mutton Biryani",
  price: 260,
  rating: 4.8,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2s6x8r5k4n7v9m1w3q6y8z5x2c4b7n9dQ&s"
},

{
  id: 12,
  name: "Chicken Curry",
  price: 210,
  rating: 4.4,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8m4n7x5r9q2v6w3y1k8z5p4d7n2f6b9gA&s"
},

{
  id: 13,
  name: "Fish Curry",
  price: 180,
  rating: 4.3,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7v6n5m3x9r2k8y1w4p5z6d7f8g3h2j9LQ&s"
},

{
  id: 14,
  name: "Chicken Lollipop",
  price: 170,
  rating: 4.6,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2r6m9x5v3n8k1w4y7p5d6f8g2h3j9L0A&s"
},

{
  id: 15,
  name: "Prawn Fry",
  price: 240,
  rating: 4.7,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5k7m4x9r2w8y1p6d3f5g7h2j8n4v9LQ&s"
},

{
  id: 16,
  name: "Egg Fried Rice",
  price: 150,
  rating: 4.2,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4m8x2v7k5w1p9y3d6f8g2h4j7n5LQ&s"
},

{
  id: 17,
  name: "Chicken Shawarma",
  price: 160,
  rating: 4.5,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6n4x8r5k2w1y7p3d9f5g6h2j4v8LQ&s"
},

{
  id: 18,
  name: "Tandoori Chicken",
  price: 280,
  rating: 4.9,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x5r2k7w4y1p8d3f6g5h2j9n4vLQ&s"
},

{
  id: 19,
  name: "Chicken Noodles",
  price: 170,
  rating: 4.3,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x8k2w7y1p4d9f6g3h5j2n8v4LQ&s"
},

{
  id: 20,
  name: "Mutton Keema",
  price: 230,
  rating: 4.6,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3k7x5r2w9y1p4d6f8g2h5j7n4vLQ&s"
},

{
  id: 21,
  name: "Crab Masala",
  price: 260,
  rating: 4.4,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x7k2w9r4y1p6d3f8g5h2j4n7vLQ&s"
},

{
  id: 22,
  name: "Chicken Wings",
  price: 190,
  rating: 4.5,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x5k2w9y4p1d6f3g8h2j5n4v7LQ&s"
},

{
  id: 23,
  name: "Fish Fingers",
  price: 200,
  rating: 4.2,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x7k5w2y9p1d6f3g8h2j4n5v7LQ&s"
},

{
  id: 24,
  name: "Chicken Momos",
  price: 140,
  rating: 4.6,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5x8k2w7y4p1d6f3g9h2j5n4v7LQ&s"
}

  ];

  /* =========================
      PAGINATION
  ========================= */

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentItems = nonVegItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="nonveg-container">

      <h1 className="title">
        🍗 Non-Veg Special 
      </h1>

      {/* =========================
            FOOD CARDS
      ========================= */}

      <div className="nonveg-list">

        {currentItems.map((item) => (

          <div className="nonveg-card" key={item.id}>

            <img src={item.img} alt={item.name} />

            <div className="card-content">

              

              <h3>{item.name}</h3>

              <p className="price">
                ₹{item.price}
              </p>

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
        autoClose: 2000,}
    );

  }}
>
  Add To Cart
</button>
            </div>

          </div>

        ))}

      </div>

      {/* =========================
            PAGINATION
      ========================= */}

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

export default NonVeg;