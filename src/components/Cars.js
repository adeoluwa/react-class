import React from 'react';
import List from './reusable/List';

const Cars = (props) => {
  const { title, superCars, luxuryCars } = props;

  let supercars = superCars.map((car) => {
    return <List key={car.id} {...car} />;
  });

  let luxurycars = luxuryCars.map((car) => {
    console.log(car);
    return <List key={car.id} {...car} />;
  });

  return (
    <div className="cars" style={{ backgroundColor: 'white' }}>
      <h1>{title}</h1>

      <div>
        <h1>Super Cars</h1>
        <div style={carStyles} className="d-flex">
          {supercars}
        </div>
      </div>

      <div>
        <div>
          <h1>Luxury cars</h1>
          <div style={carStyles} className="d-flex">
            {luxurycars}{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

// embedded css for react

let carStyles = {
  display: 'flex',
  justifycontent: 'center',
  backgroundColor: 'white',
};

export default Cars;
