import { Outlet } from "react-router-dom";

function UsersLayout() {
    return (
        <div>
            <h1>Users Layout</h1>

            <Outlet />
        </div>
    )
}

export default UsersLayout;

