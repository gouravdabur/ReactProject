import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Veg.css";

function Veg() {
  const dispatch = useDispatch();

  const vegItems = [

    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 180,
      rating: 4.7,
      img: "https://spiceindiaonline.com/wp-content/uploads/2021/02/Easy-Paneer-Butter-Masala-1-500x500.jpg"
    },
  
    {
      id: 2,
      name: "Veg Biryani",
      price: 150,
      rating: 4.5,
      img: "https://www.cookingcarnival.com/wp-content/uploads/2025/09/Vegetable-Dum-Biryani-5-500x500.jpg"
    },
  
    {
      id: 3,
      name: "Aloo Gobi",
      price: 120,
      rating: 4.3,
      img: "https://cinnamonsnail.com/wp-content/uploads/2024/08/Aloo-Gobi-05.jpg"
    },
  
    {
      id: 4,
      name: "Palak Paneer",
      price: 170,
      rating: 4.8,
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe-500x375.jpg"
    },
  
    {
      id: 5,
      name: "Veg Fried Rice",
      price: 130,
      rating: 4.2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDttBX4uGzZ1Y5POXeUaPMkVCYtayAsijVw&s"
    },
  
    {
      id: 6,
      name: "Chole Bhature",
      price: 140,
      rating: 4.6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8swU8bZ2QBXg15bygXH4_JMAFwd_cxjhyWw&s"
    },
  
    {
      id: 7,
      name: "Mixed Veg Curry",
      price: 125,
      rating: 4.1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFmMGJlfxGvp0zGmsGjUijCWxynckzwvYfQ&s"
    },
  
    {
      id: 8,
      name: "Dal Tadka",
      price: 110,
      rating: 4.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3YYewOBDoO3d7pJGzUkqr-uKxzzxhNCgQ&s"
    },
  
    {
      id: 9,
      name: "Mushroom Masala",
      price: 160,
      rating: 4.4,
      img: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg"
    },
  
    {
      id: 10,
      name: "Veg Noodles",
      price: 120,
      rating: 4.2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmI7yYt9jplagMqQYIBgFjKFPXUPGH5as2yA&s"
    },
  
    {
      id: 11,
      name: "Paneer Tikka",
      price: 190,
      rating: 4.8,
      img: "https://thumbs.dreamstime.com/b/indian-food-celebrations-dishes-like-paneer-tikka-chicken-masala-their-vibrant-colors-aromatic-spices-bring-festive-joy-329320659.jpg"
    },
  
    {
      id: 12,
      name: "Veg Manchurian",
      price: 150,
      rating: 4.5,
      img: "https://t4.ftcdn.net/jpg/03/24/56/73/360_F_324567329_VIPsg4s4kWkvqJviANcIgeYPG602kN56.jpg"
    },
  
    {
      id: 13,
      name: "Rajma Chawal",
      price: 130,
      rating: 4.6,
      img: "https://thumbs.dreamstime.com/b/punjabi-cuisine-rajma-chawal-indian-vegetarian-meal-rajma-chawal-salad-top-view-114181130.jpg"
    },
  
    {
      id: 14,
      name: "Masala Dosa",
      price: 100,
      rating: 4.9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLkdmNl2vyxV9YYnT9VoxnH_1XU_6IuSjdw&s"
    },
  
    {
      id: 15,
      name: "Idli Sambar",
      price: 90,
      rating: 4.7,
      img: "https://t4.ftcdn.net/jpg/04/39/31/29/360_F_439312935_lxOEQSqasYc5GeyHKgYJXWCIFm8gmQUN.jpg"
    },
  
    {
      id: 16,
      name: "Pav Bhaji",
      price: 110,
      rating: 4.5,
      img: "https://t3.ftcdn.net/jpg/05/26/67/36/360_F_526673624_MWQkxo3etLNTQbyfJpeBhoRlF4jTOS8H.jpg"
    },
  
    {
      id: 17,
      name: "Spring Rolls",
      price: 140,
      rating: 4.3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFJzjatCvk4fBTW8bW4jnVg1qCUlKCotXrQ&s"
    },
  
    {
      id: 18,
      name: "Veg Pizza",
      price: 220,
      rating: 4.8,
      img: "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg"
    },
  
    {
      id: 19,
      name: "Cheese Burger",
      price: 160,
      rating: 4.4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkuj9yfLe1GgkAjvDGsUF4yBkrWEIlCmDaQ&s"
    },
  
    {
      id: 20,
      name: "Veg Momos",
      price: 130,
      rating: 4.6,
      img: "https://t3.ftcdn.net/jpg/06/49/25/26/360_F_649252668_AcwaAGxraSFmNbr5C20hDpTwz1qoi7RF.jpg"
    },
    {
      id: 21,
      name: "Hakka Noodles",
      price: 140,
      rating: 4.4,
      img: "https://www.shutterstock.com/image-photo/chicken-hakka-noodles-schezwan-szechwan-600nw-2081149771.jpg"
    },
    
    {
      id: 22,
      name: "Kadai Paneer",
      price: 190,
      rating: 4.7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieEcKUiPlCTwR7jJp6ZNmgL5xtEuz2v6RBg&s"
    },
    
    {
      id: 23,
      name: "Veg Sandwich",
      price: 110,
      rating: 4.3,
      img: "https://thumbs.dreamstime.com/b/veg-grilled-sandwich-served-ketchup-isolated-over-rustic-wooden-background-selective-focus-224440470.jpg"
    },
    
    {
      id: 24,
      name: "Matar Paneer",
      price: 170,
      rating: 4.6,
      img: "https://t4.ftcdn.net/jpg/10/59/45/99/360_F_1059459954_OzKZb6YyIkR0jbfxDY5HEsr7L9PWdmKn.jpg"
    }
  
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Pagination
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = vegItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="veg-container">
      <h1>Veg 🥕</h1>

      {/* ITEMS */}
      <div className="veg-list">
        {currentItems.map((item) => (
          <div className="veg-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p className="rating">
              ⭐⭐⭐⭐⭐ {item.rating}
              {item.rating}
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

export default Veg;