import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
   state = {
    person: []
   } 


    componentDidMount() {
        axios.get(`https://localhost:7159/api/AllPerson`)
            .then(res => {
            const persons = res.data;
            this.setState({ persons });
            alert(res.data)
            console.log(persons);
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.persons
                    .map(person =>
                        <li key={person.id}>{person.name}</li>
                    )
                }
            </ul>
        )
    }
}