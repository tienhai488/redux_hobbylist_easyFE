import React from "react";
import PropTypes from "prop-types";
import "./HobbyList.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeHobby, setActiveId } from "components/Home/HobbyList/hobbySlice";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleDelete = (hobby) => {
    dispatch(removeHobby(hobby));
  };

  const handleClick = (id) => {
    dispatch(setActiveId(id));
  };

  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby, index) => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? "active" : ""}
          onClick={() => handleClick(hobby.id)}
        >
          {hobby.title}
          <button onClick={() => handleDelete(hobby)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
