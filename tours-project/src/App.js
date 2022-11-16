import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log(id);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <h2>Loading....</h2>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>no tours found</h2>
        <button onClick={fetchData}>get tours</button>
      </main>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
