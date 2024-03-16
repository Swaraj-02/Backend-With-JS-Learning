import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/joke");
        setJoke(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Frontend Is Working...</h1>
      <h2>JOKES : {joke?.length}</h2>

      {joke.map((item, index) => {
        return (
          <div key={item.id + index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
