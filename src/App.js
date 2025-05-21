import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  const [message, setMessage] = useState('');

  const fetchGreeting = async () => {
    try {
      // API 请求（根据部署方式选择相对路径或绝对路径）
      const response = await fetch('https://my-first-worker.nevermoyan.workers.dev/api/greet');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>测试案例</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        <button onClick={fetchGreeting} className="fetch-button">
          调用接口
        </button>
        <p> 返回数据 ： {message || 'Click the button to fetch a greeting!'}</p>
      </header>
    </div>
  );
}

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Page</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
        <p>This is the About page of the demo.</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;