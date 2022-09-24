const initialState = {
  list: [],
  activeId: "",
};

const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list, action.payload];

      return {
        ...state,
        list: newList,
      };
    }

    case "DELETE_HOBBY": {
      const listHobby = [...state.list];
      const newList = listHobby.filter((item) => item.id !== action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case "SET_ACTIVE_HOBBY": {
      const newActiveId = action.payload;
      return {
        ...state,
        activeId: newActiveId,
      };
    }

    default:
      return state;
  }
};

export default hobbyReducer;
