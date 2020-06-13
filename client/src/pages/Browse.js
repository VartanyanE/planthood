import React, { useEffect, useState, useContext } from "react";
import SimpleTable from "../components/SearchResults";
import { browsePlants } from "../utils/API";
import plantContext from "../utils/plantContext";

function Browse() {
  // const [plants, setPlants] = useState([]);
  const { plants, setPlants } = useContext(plantContext);
  useEffect(() => {
    browsePlants().then(({ data }) => setPlants(data));
  }, []);

  return (
    <div>
      <h1>Browse</h1>
      <SimpleTable />
    </div>
  );
}

export default Browse;
