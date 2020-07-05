import React from 'react';
import search from './Search';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {   id: 1,
                    name: 'Shalini'
                }, 
                {   
                    id: 2,
                    name: 'Rahul'
                },
                {
                    id: 3,
                    name: 'Nisha'
                },
                {
                    id: 4,
                    name: 'Kinjal'
                },
                {
                    id: 5,
                    name: 'Kajal'
                },
                {
                    id: 6,
                    name: 'Rutu'
                },
                {
                    id: 7,
                    name: 'Niti'
                }     
            ]
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        let searchData = e.target.value.toLowerCase();
        const filtered = search(this.state.users, searchData);
        this.setState({users: filtered});
    }
    render() {
        const userData = this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))
    return (
        <div>
            <label>Enter username to search </label>  
            <input type="text" onChange={this.handleChange} />
            <ul>
                {userData}
            </ul>
        </div>
    )
    }
}

export default Users;