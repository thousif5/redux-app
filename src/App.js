import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./redux/actions/index";
function App() {
  const counter = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {login ? <h3>Private data</h3> : ""}
    </div>
  );
}

export default App;
