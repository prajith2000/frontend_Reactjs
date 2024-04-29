import React from 'react';
import HomeComponent from './Components/HomeComponent'; 
import MarketComponent from './Components/MarketComponent';
import ArtCompetitionForm from './Components/ArtCompetitionForm';
import Playground from './Components/Playground';
//import DataFetchingApi from './Components/DataFetchingApi';
import {BrowserRouter as
   Router, 
   Routes, 
   Route,
    Link, 
 } from "react-router-dom";
 import './App.css'
function App(){
  return(
    
  <Router>
    <div className="app-container">
      <div className="sidebar">
    <Link to="/" className="sidebar-btn">Home</Link>
    <Link to="/deliveryService" className="sidebar-btn">Delivery Service</Link>
    <Link to="/artCompetition" className="sidebar-btn">Art Competition</Link>
    <Link to="/playground" className="sidebar-btn">Play Ground</Link> 
       </div>
       <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/deliveryService" element={<MarketComponent/>}/> 
          <Route path="/artCompetition" element={<ArtCompetitionForm/>}/>
          <Route path="/playground" element={<Playground />}/> 

       </Routes>
      </div>

  </Router>
  )
}





export default App;
     
  


  
 
