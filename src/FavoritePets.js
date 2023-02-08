import "./App.css";
import { petFavoriteIncrement, petFavoriteDecrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const FavoritePets = () => {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Favorite Pets</h2>
      <button onClick={() => dispatch(petFavoriteIncrement(1))}>
        Increment
      </button>
      <button onClick={() => dispatch(petFavoriteDecrement(1))}>
        Decrement
      </button>
      <h2>Total: {petCounter}</h2>
      <h2>Favorites {petFavorite}</h2>
    </div>
  );
};

export default FavoritePets;
