export const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY",
    payload: hobby,
  };
};

export const deleteHobby = (id) => {
  return {
    type: "DELETE_HOBBY",
    payload: id,
  };
};

export const setActiveHobby = (id) => {
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: id,
  };
};
