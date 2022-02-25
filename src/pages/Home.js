import React, { useEffect, useState } from "react";
import moment from "moment";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const pastMonth = moment().subtract(1, "months").format("YYYY-MM-DD");
  const [earthquakes, setEarthquakes] = useState([]);
  const navigate = useNavigate();
  const handleDetailClick = (eventId) => {
    navigate(`details/${eventId}`);
  };
  const fetchEarthquakes = async () => {
    const response = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${pastMonth}&limit=15`
    );
    const data = await response.json();
    setEarthquakes(data.features);
  };
  useEffect(() => {
    fetchEarthquakes();
  }, []);
  const renderEarthQackes = () =>
    earthquakes.map((earthquake) => renderEarthQacke(earthquake));
  const renderEarthQacke = (earthquake) => (
    <li key={earthquake.id} className="py-2 flex justify-between ">
      <p className="flex-1 text-blue-100">{earthquake.properties.place}</p>
      <p className="flex-1  text-center text-blue-100">
        {earthquake.properties.mag}
      </p>
      <p className="flex-1  text-blue-100">
        {moment(earthquake.properties.time).format("DD MMM YYYY hh:mm a")}
      </p>

      <div className="p-2">
        <Button
          handleClick={() => handleDetailClick(earthquake.id)}
          title={"Detail"}
        />
      </div>
    </li>
  );

  return (
    <div className=" bg-red-300  flex flex-1 py-10">
      <div className="container mx-auto   bg-sky-500  rounded-md p-10 ">
        <h1 className="text-center text-3xl font-bold  text-blue-100">
          Earthquakes
        </h1>
        {earthquakes.length && (
          <ul className="list-none">
            <li className="py-2 flex justify-between px-12 text-blue-100">
              <p className="flex-1 text-blue-100">Place</p>
              <p className="flex-1  text-center text-blue-100"> Mag</p>
              <p className="flex-1  text-right text-blue-100">Time</p>
            </li>
            {renderEarthQackes()}
          </ul>
        )}
      </div>
    </div>
  );
}
