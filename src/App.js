import React from 'react';

import './App.css';
import Cars from './components/Cars';
import Foods from './components/Foods';

function App() {
  let data = {
    carsCollection: {
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
      superCars:[
        {id: 1, name: 'bugati', url: 'http://www.elitetraveler.com/wp-content/uploads/2012/12/bugatti-veyron-super-sport-.jpg'},
        {id:2 ,  name: 'ferarri', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxICSlRS_4fuozWCFCwqnGj6VRNqGGDgPRRQ&usqp=CAU'},
        {id:3, name: 'agarah', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxICSlRS_4fuozWCFCwqnGj6VRNqGGDgPRRQ&usqp=CAU'},
      ]
    },
  };

  let data2 = {
    foodCollection: {
      casualFood: [
        {
          id: 1,
          name: 'ofada rice',
          url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Ofada_rise_with_fried_plantain_and_beaf.jpg',
        },
        {
          id: 2,
          name: 'beans',
          url: 'https://www.organicfacts.net/wp-content/uploads/ewaagoyinmashedbeans.jpg',
        },
        {
          id: 3,
          name: 'yam',
          url: 'https://niammy.com/img/public/990/201905/1558189098_48804.jpg',
        },
      ],
      partyFood: [
        {
          id: 1,
          name: 'jollof',
          url: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42788e49474248dba75fdfd47114024a/BFV43575_PartyRiceAroundAfrica-FB-V2.jpg',
        },
        {
          id: 2,
          name: 'pounded yam',
          url: 'https://www.symplinatural.com/wp-content/uploads/2016/10/Pounded-Yam-with-Egusi-Soup-1.jpg',
        },
        {
          id: 3,
          name: 'amala',
          url: 'https://techpoint.africa/wp-content/uploads/2018/10/amala.jpg',
        },
      ],
    },
  };

  return (
    <div>
      <h1> Welcome to my React</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        dolor totam suscipit aut ducimus ipsam doloribus asperiores magnam
        adipisci iusto.
      </p>

      <Cars title="cars" carData={data.carsCollection} />

      <Foods title='foods' foodData = {data2.foodCollection}/>
    </div>
  );
}

export default App;
