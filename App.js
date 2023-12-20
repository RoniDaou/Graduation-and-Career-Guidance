import React, { createContext, useReducer, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from './Signup/SignupForm';
import Login from './Login/login';
import Navbar from './Components/Navbar/NavBar'; 
import Value from './Components/ValueDiv/Value'; 
import Footer from './Components/FooterDiv/Footer';
import Universities from './Components/Categories/Universities';
import Skills from './Components/Categories/Skills';
import Activities from './Components/Categories/Activities';
import Scholarships from './Components/Categories/Scholarships';
import Mentor from './Components/Categories/Mentor';
import Info from './Components/BasicInfo/Info';
import About from './Components/FooterDiv/About';
import { initialState, reducer } from "../src/reducer/useReducer";

export const UserContext = createContext();

const PrivateRoute = ({ element }) => {
  const { state } = useContext(UserContext);

  if (state.isAuthenticated) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Info replace="/Home" />} />
      <Route path="/Home" element={<Info />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<SignupForm />} />
      <Route path="/Universities" element={<PrivateRoute element={<Universities />} />} />
      <Route path="/Skills" element={<PrivateRoute element={<Skills />} />} />
      <Route path="/Activities" element={<PrivateRoute element={<Activities />} />} />
      <Route path="/Scholarships" element={<PrivateRoute element={<Scholarships />} />} />
      <Route path="/Mentor" element={<PrivateRoute element={<Mentor />} />} />
      <Route path="/About" element={<About />}/>
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <UserContext.Provider value={{ state, dispatch }}>
        <div>
          <Navbar />
          <Routing />
          <Value />
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
