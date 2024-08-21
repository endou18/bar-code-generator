import React, { useState, useEffect } from 'react';
import axios from "axios";
import Dashboard from './Component/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gaya from './Component/Gaya';
import Dhanbad from './Component/Dhanbad';
import Bangalore from './Component/Bangalore';
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/wifiname")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    // <div className="App">
    //   {/* <h1>QR Code Generator</h1> */}
    //   {/* <InputOfURL urlChng={changeUrl} /> */}
    //   {/* {url.length > 0 && <QRCodeGenerator urlValue={url}/>} */}
    //   <Dashboard allData={posts} />

    // </div>
    <Router>
      <Routes>
        {/* Route for the Dashboard with fetched data */}
        <Route
          path="/"
          element={
            <div className="App">
              <Dashboard allData={posts} />
            </div>
          }
        />

        {/* Route for the new page */}
        <Route
          path="/Gaya"
          element={<Gaya data={posts} />}
        />
        <Route
          path="/dhanbad"
          element={<Dhanbad data={posts} />}
        />
        <Route
          path="/Bangalore"
          element={<Bangalore data={posts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
