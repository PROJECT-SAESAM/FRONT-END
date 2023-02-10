import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Users = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                console.log(typeof users, users);
            });
    }, []);

    interface UserType {
        id: number;
        name: string;
    }

    console.log(users[0].id + "," + users[0].name);

    return <div>{users[0].name}</div>

};

export default Users;