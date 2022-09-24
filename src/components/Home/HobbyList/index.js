import React from "react";
import PropTypes from "prop-types";
import "./HobbyList.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteHobby, setActiveHobby } from "../../../actions/hobby";

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  active: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteHobby(id));
  };

  const handleClick = (id) => {
    dispatch(setActiveHobby(id));
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
          <button onClick={() => handleDelete(hobby.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
