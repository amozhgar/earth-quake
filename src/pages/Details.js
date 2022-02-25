import React, { useEffect, useState } from "react";
import moment from "moment";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
export default function Details() {
  const [earthquake, setEarthquake] = useState(null);
  const id = useParams().eventId;
  console.log(id);
  const fetchEarthquakes = async () => {
    const response = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${id}`
    );
    const data = await response.json();

    setEarthquake(data);
    console.log(earthquake);
  };
  useEffect(() => {
    fetchEarthquakes();
  }, []);
  //   const renderEarthQackes = () =>
  //     earthquake.map((earthquake) => renderEarthQacke(earthquake));
  const renderEarthQacke = () => (
    <>
      <li className="py-2 ">
        <p className="flex-1 text-blue-100">
          Place: {earthquake.properties.place}
        </p>
      </li>
      <li className="py-2 ">
        <p className="flex-1  text-blue-100 text-right">
          Mag: {earthquake.properties.mag}
        </p>
      </li>
      <li className="py-2 ">
        <p className="flex-1  text-blue-100">
          Date:
          {moment(earthquake.properties.time).format("DD MMM YYYY hh:mm a")}
        </p>
      </li>
      <li className="py-2 ">
        <p className="flex-1  text-blue-100 text-right">
          Lat:
          {earthquake.geometry.coordinates[1]}
        </p>
      </li>
      <li>
        <p className="flex-1  text-blue-100">
          Long:
          {earthquake.geometry.coordinates[0]}
        </p>
      </li>
      <li>
        <a
          href={earthquake.properties.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="flex-1  text-blue-100 text-center">
            link: {earthquake.properties.url}
          </p>
        </a>
      </li>
    </>
  );

  return (
    <div className=" bg-red-300  flex flex-1 py-10">
      <div className="container mx-auto   bg-sky-500  rounded-md p-10">
        {earthquake && (
          <h1 className="text-center text-3xl font-bold pb-10 text-blue-100">
            {earthquake.properties.title}
          </h1>
        )}
        <ul class="list-none">{earthquake && renderEarthQacke()}</ul>
      </div>
    </div>
  );
}
