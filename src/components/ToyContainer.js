import React from "react";
import ToyCard from "./ToyCard";



function ToyContainer({toys}) {

  const toyCard = toys.map((toy) => (
    <ToyCard 
      key={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      />
  ))


  return (
    <div id="toy-collection">{toyCard}</div>
  );
}

export default ToyContainer;
