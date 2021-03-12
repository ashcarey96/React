import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: props.age
        };
    }

    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>{this.state.ageCount}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>

            </div>
        );
    }

    birthday = (event) => {
        this.setState({
            ageCount: this.state.ageCount + 1
        });
    }

}
export default PersonCard;


