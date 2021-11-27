import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const login = () => {
        console.log('User has logged in!');
        navigate('/users');
    }

    return (
        <div>
            <h1>Home Page</h1>

            <button onClick={login}>Login</button>
        </div>
    )
}

export default Home;