import "./App.css";
import FavoritePets from "./FavoritePets";
import { petIncrement, petDecrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
      <h2>Total Pets</h2>
      <button onClick={() => dispatch(petIncrement(1))}>Increment</button>
      <button onClick={() => dispatch(petDecrement(1))}>Decrement</button>
      <h2>Total: {petCounter}</h2>
      <h2>Favorites {petFavorite}</h2>
      <FavoritePets />
    </div>
  );
}

export default App;
