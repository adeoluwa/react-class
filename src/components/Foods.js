import React from 'react';

const Foods = (props) => {
  const { title, foodData } = props;

  let casualFood = foodData.casualFood.map((food) => {
    console.log(food);
    return (
      <div>
        <img src={food.url} width="200px" />
        <p>{food.name}</p>
      </div>
    );
  });

  let partyFood = foodData.partyFood.map((food) => {
    console.log(food);
    return (
      <div>
        <img src={food.url} width="200px" />
        <p>{food.name}</p>
      </div>
    );
  });

  return (
    <div className="foods" style={{ backgroundColor: 'white' }}>
      <h1>{title}</h1>

      <div>
        <h1>casual Food </h1>
        <div style={foodStyles} className="d-flex">
          {casualFood}
        </div>
      </div>

      <div>
        <div>
          <h1>party Food</h1>
          <div style={foodStyles} className="d-flex">
            {partyFood}{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

let foodStyles = {
  display: 'flex',
  justifycontent: 'center',
  backgroundColor: 'white',
};

export default Foods;
