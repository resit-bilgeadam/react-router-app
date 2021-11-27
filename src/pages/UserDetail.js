import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const usersURL = 'https://jsonplaceholder.typicode.com/users';

function UserDetail() {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const response = await fetch(`${usersURL}/${id}`);
        const data = await response.json();

        setUser(data);
    }

    useEffect(() => {
        fetchUser()
    }, [id])
    

    return (
        <div>
            <h1>User {id} Detail Page</h1>

            {
                user ?
                <div>
                    <p>Name: <strong>{user.name}</strong></p>
                    <p>Username: <strong>{user.username}</strong></p>
                    <p>Email: <strong>{user.email}</strong></p>
                </div> :
                <h1>...LOADING</h1>
            }
        </div>
    )
}

export default UserDetail;
