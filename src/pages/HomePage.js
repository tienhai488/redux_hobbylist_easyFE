import React from "react";
import { useDispatch } from "react-redux";
import HobbyList from "components/Home/HobbyList";
import { addHobby } from "components/Home/HobbyList/hobbySlice";

const ID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

function HomePage() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const userId = ID();
    const action = {
      id: userId,
      title: `Hobby ${userId}`,
    };
    dispatch(addHobby(action));
  };

  return (
    <div>
      <h1>Home Page - Hobby</h1>

      <button onClick={handleAdd}>Add Hobby List</button>

      <HobbyList />
    </div>
  );
}

export default HomePage;
