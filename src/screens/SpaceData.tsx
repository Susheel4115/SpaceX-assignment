import { Dispatch } from "@reduxjs/toolkit";
import { fetchData } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./Modal.css";
export default function SpaceData() {
  const dispatch = useDispatch<Dispatch<any>>();

  const [launchYear, setLaunchYear] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [selectedLaunch, setSelectedLaunch] = useState<any>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // dispatch the fetch data action when the component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // update the data state when the Redux store data changes
  const spaceData = useSelector((state: any) => state.spacex.data);
  useEffect(() => {
    setData(spaceData);
  }, [spaceData, data]);

  // useEffect(() => {
  //   setLaunchYear(new Date().getFullYear().toString());
  // }, []);

  // filter the data by launch year
  const filterDataByYear = (year: string) => {
    const filteredData = data.filter((launch: any) => {
      // console.log("type ", launch.launch_date_local[3]);
      // let res = "";
      // for (let i = 0; i < 4; i++) {
      //   res += launch.launch_date_local[i];
      // }
      // console.log("res is ", res);
      // return res === year;
      const launchYear = launch.launch_date_local.substring(0, 4);
      console.log("launch is ", launchYear);
      setSelectedLaunch([
        launchYear,
        launch.launch_date_local,
        launch.mission_name,
        launch.mission_details,
      ]);
      if (launchYear === year) return launchYear;
      else return null;
    });
    // setSelectedLaunch(filteredData);
    // setSelectedLaunch(null); // reset the selected launch state
    setIsModalVisible(true); // show the modal
  };

  // render the data
  return (
    <div>
      <h1>SpaceX Launches</h1>
      <div>
        <label htmlFor="search">Search by Launch Year: </label>
        <input
          type="text"
          id="search"
          value={launchYear}
          onChange={(e) => setLaunchYear(e.target.value)}
        />
        <button onClick={() => filterDataByYear(launchYear)}>Search</button>
      </div>
      <div className="spacedata">
        <ul>
          {data.map((launch: any) => (
            <div className="inner" key={launch.mission_name}>
              <li>
                <h2>{launch.mission_name}</h2>
                <p>{launch.details}</p>
                <p>Launch date : {launch.launch_date_local}</p>
                {/* <button onClick={() => setSelectedLaunch(launch)}>
              View Details
            </button> */}
              </li>
            </div>
          ))}
        </ul>
      </div>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedLaunch?.mission_name}</h2>
            <p>{selectedLaunch?.details}</p>
            <p>{selectedLaunch?.launch_date_local}</p>
            <button onClick={() => setIsModalVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
