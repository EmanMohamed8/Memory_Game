import React, { useEffect } from "react";
import MemoryGame from "./components/MemoryGame";
import { useDispatch } from "react-redux";
import { getGameData } from "./store/gameActions";
import Begin from "./begin/begin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameData());
  }, [dispatch]);
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Begin/>} />
        <Route path="/game" element={<MemoryGame/>} />
      </Routes>
    </Router>
  )
}

export default App;
