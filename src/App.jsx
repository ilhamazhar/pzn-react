import { BrowserRouter, Route, Routes } from 'react-router';
import axios from 'axios';
import { Provider } from 'react-redux';
//Pages
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
//Components
import Layout from './components/layout/Layout.jsx';
import Checklist from './pages/Checklist.jsx';
//Redux
import { store } from './redux/store.js';
//Styles
import './App.css';
import './index.css';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="checklist" element={<Checklist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
