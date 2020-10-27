export const initialState = {
  // initial data layer slice
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   used during prod mode
  //   token: null,

  //   used during dev mode; remove during production
  token:
    "BQCruaHg0vcOFrrLtwbQpZdL5NJB1Y05wcDCcgnwuDgIrbBf8di7evbwHFt-X6WEnUkKXS4ihMprKMTj3Wh7i8ugttCtpmQRFYoR-HFHMP096nPynCYDxdigTMBfGOenFhbFwyG8VXquPE3DITihA_zLugzNwHjAnMObVMLP-4trxv7K",
};

const reducer = (state, action) => {
  console.log(action);

  //   Action = type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
