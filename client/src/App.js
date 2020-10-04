import React from 'react';
import InputForm from './components/InputForm'
import RentedList from './components/RentedList'
import AvailabelList from './components/AvailabelList'

import './App.css';

function App() {
  return (
    
    <div>
      <h1> Rent Bike APP </h1>
        
           <InputForm />
           <RentedList />
           <AvailabelList />
        

    </div>
  );
}

export default App;
