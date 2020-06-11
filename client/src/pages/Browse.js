import React, {useEffect, useState} from "react";
import SimpleTable from "../components/SearchResults";
import {browsePlants} from "../utils/API";

function Browse() {
  const [plants, setPlants] = useState([]);
  useEffect(()=>{
     browsePlants().then(({data})=>setPlants(data))
  },[])

  return (
    <div>
      <h1>Browse</h1>
      <SimpleTable plants={plants}/>
    </div>
  );
};


export default Browse;
