import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [filteredByPopular, setFilteredByPopular] = useState(false);

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(toys => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handlePopularClick(){
    setFilteredByPopular((filteredByPopular) => !filteredByPopular)
  }

  const toysToDisplay = filteredByPopular ? toys.filter((toy) => toy.likes > 5) : toys;
    
  
  return (
    <>
      <Header />
    
      {showForm ? <ToyForm addToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
        <br/>
        <button onClick={handlePopularClick}>Most Popular Toys</button>
      </div>
      <ToyContainer toys={toysToDisplay} />
        
    </>
  );
}

export default App;
