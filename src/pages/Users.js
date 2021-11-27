import {useEffect, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';


function Users() {
    const [users, setUsers] = useState(null);

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        setUsers(data);

        /*
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
        */
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <h1>User List</h1>

            {
                users ?
                users.map(user => (
                    <div key={user.id}>
                        <Link to={`${user.id}`}>{user.name}</Link>
                    </div>
                )) :
                <h1>...LOADING</h1>
            }
        </div>
    )
}

export default Users;