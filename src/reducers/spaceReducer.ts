import { FETCH_DATA, OPEN_MODAL } from "../actions/actions";

interface AppState {
  data: any[];
  isModalOpen: boolean;
  modalData: any;
}

const initialState: AppState = {
  data: [],
  isModalOpen: false,
  modalData: null,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true, modalData: action.payload };
    default:
      return state;
  }
};

export default appReducer;
