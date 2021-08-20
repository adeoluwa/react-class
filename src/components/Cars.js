import React from 'react';




const Cars = (props) => {
    const { title, carData } = props;

    let superCars = carData.superCars.map((car) => {
        console.log(car);
        return(
            <div>
                <img src = {car.url} width = "200px"/>
                <p>{car.name}</p>
            </div>
        )
    });

    let luxuryCars = carData.luxuryCars.map((car) => {
        console.log(car);
        return(
            <div>
                <img src = {car.url} width = '200px'/>
                <p>{car.name}</p>
            </div>
        )
    }
    )



  return (
    <div  className = "cars" style = { {backgroundColor: 'white'}  }>
        <h1>{title}</h1>

        <div>
            <h1>Super Cars</h1>
            <div style = {carStyles} className = 'd-flex'>{superCars}</div>
        </div>

        <div>
            <div>
                <h1>Luxury cars</h1>
                <div style={carStyles} className = 'd-flex'>{luxuryCars} </div>
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
}

export default Cars;
