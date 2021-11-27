import {Link, NavLink} from 'react-router-dom';


function Toolbar() {
    const checkActive = ({isActive}) => {
        const baseClass = 'toolbar-link';
        const activeClass = 'active';

        return isActive ? `${baseClass} ${activeClass}` : baseClass;

    }


    return (
        <nav className='toolbar'>
            <Link className='brand-logo' to='/'>Router App</Link>

            <ul className='toolbar-list'>
                <li className='toolbar-item'>
                    <NavLink className={checkActive} to='/'>Home</NavLink>
                </li>

                <li className='toolbar-item'>
                    <NavLink className={checkActive} to='/about'>About</NavLink>
                </li>

                <li className='toolbar-item'>
                    <NavLink className={checkActive} to='/contact'>Contact</NavLink>
                </li>

                <li className='toolbar-item'>
                    <NavLink className={checkActive} to='/users'>Users</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Toolbar;
