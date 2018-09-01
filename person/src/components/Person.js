import React from 'react';

const Person = (props) => {
    return (
        <div>
            I'm {props.name} and my age is {props.age}
        </div>
    );
}

export default Person;
