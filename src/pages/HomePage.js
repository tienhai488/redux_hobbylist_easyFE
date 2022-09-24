import React from "react";
import { useDispatch } from "react-redux";
import { addNewHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";

const randomId = () => Math.floor(Math.random() * 100000);

function HomePage() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const userId = randomId();
    const action = {
      id: userId,
      title: `Hobby ${userId}`,
    };
    dispatch(addNewHobby(action));
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
