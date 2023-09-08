import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Screen } from './screens/Screen';
import { MaleTemplate } from './screens/MaleTemplate';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Ошибка при запросе к серверу:', error));
  }, []);

  let content;

  if (data.length > 0) {
    content = (
      <div>
        <h1>Данные из PostgreSQL</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    content = <div>Loading...</div>;
  }

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Screen/>}/>
          <Route exact path="/male" element={<MaleTemplate/>}/>
        </Routes>
    </Router>
  );
}

export default App;
