import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getPostData = async (id) => {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/todos/${id}`);
      setData(response.data);
      setLoading(false);
    };
    getPostData(1);
  }, []);

  return (
    <>
      {loading && !data ? (
        <div>Loading Post ....</div>
      ) : (
        <div>
          <h2>{data?.title}</h2>
          <p>{data?.id}</p>
        </div>
      )}
    </>
  );
}

export default App;
