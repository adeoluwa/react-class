import React from 'react';

import './App.css';
import Cars from './components/Cars';

import Food2 from './components/Food2';
import Form from './components/Form';

import Afang from './images/Afang-soup-16.jpg';
import Ewa from './images/Ewa-agoyin.jpg';
import FriedRice from './images/Fried-rice.jpg';

import { LuxuryCarsForm2, SuperCarsForm2 } from './components/Form2';

class App extends React.Component {
  state = {
    luxuryCars: [
      {
        id: 1,
        name: 'Rolls Royce',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3XjLhjyU81D-BvHZAV6K9_0puy34tnt4sA&usqp=CAU',
      },
      {
        id: 2,
        name: 'Mercedes Benz',
        url: 'https://www.motortrend.com/uploads/sites/5/2020/09/2021-Mercedes-Benz-S-500-S-580-4Matic-42.jpg?fit=around%7C875:492.1875',
      },
      {
        id: 1,
        name: 'bentley',
        url: 'https://www.motortrend.com/uploads/sites/5/2021/05/2022-Bentley-Continental-GT-Speed-71.jpg',
      },
    ],
    superCars: [
      {
        id: 1,
        name: 'bugati',
        url: 'http://www.elitetraveler.com/wp-content/uploads/2012/12/bugatti-veyron-super-sport-.jpg',
      },
      {
        id: 2,
        name: 'ferarri',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxICSlRS_4fuozWCFCwqnGj6VRNqGGDgPRRQ&usqp=CAU',
      },
      {
        id: 3,
        name: 'agarah',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxICSlRS_4fuozWCFCwqnGj6VRNqGGDgPRRQ&usqp=CAU',
      },
    ],

    food: [
      { id: 1, name: 'Fried Rice', url: FriedRice },
      { id: 2, name: 'Afang Soup', url: Afang },
      { id: 3, name: 'Ewa agonyi', url: Ewa },
    ],
  };

  addSuperCars = (incomingData) => {
    let newId = this.state.superCars.length + 1;

    let newData = { id: newId, ...incomingData };
    this.setState({
      SuperCars: [...this.state.superCars, newData],
    });
    console.log(this.state);
  };

  addAnotherLuxury = (incomingData) => {
    let newID = this.state.luxuryCars.length + 1;
    let newCar = { id: newID, ...incomingData };
    this.setState({
      luxuryCars: [...this.state.luxuryCars, newCar],
    });
  };

  render() {
    return (
      <div>
        <LuxuryCarsForm2 addAnotherLuxury={this.addAnotherLuxury} /> <br />
        <br />
        <SuperCarsForm2 addSuperCars={this.addSuperCars} /> <br />
        {/* <Form addLuxuryCars={this.addLuxuryCars} /> */}
        <Cars
          title="Cars"
          luxuryCars={this.state.luxuryCars}
          superCars={this.state.superCars}
        />
        <Food2 foodList={this.state.food} />
      </div>
    );
  }
}

export default App;
