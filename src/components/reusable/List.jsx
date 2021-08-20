import React from  'react';


function List(props) {
    console.log('List', props);
    return(
        <div>
            <p style={{color: 'black'}}> {props.name}</p>
            <img width='200px' src={props.url} alt={`...${props.name}`} />
        </div>
    );
}


export default List