// actions.ts
export const FETCH_DATA = "FETCH_DATA";
export const OPEN_MODAL = "OPEN_MODAL";

export const fetchData = () => async (dispatch: any) => {
  const response = await fetch("https://api.spacexdata.com/v3/launches");
  console.log("response is--->", response);
  const data = await response.json();
  dispatch({ type: FETCH_DATA, payload: data });
};

export const openModal = (data: any) => ({ type: OPEN_MODAL, payload: data });
