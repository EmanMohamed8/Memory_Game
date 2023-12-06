import React, { useEffect } from "react";
import MemoryGame from "./components/MemoryGame";
import { useDispatch } from "react-redux";
import { getGameData } from "./store/gameActions";
import Begin from "./begin/begin";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameData());
  }, [dispatch]);

  return(
    <div>
      <Begin />
      {/* <MemoryGame /> */}
    </div>
  )
}

export default App;
