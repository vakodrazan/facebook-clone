import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../pages/Context';
import { MenuListStyle } from "./Styles";

function Header() {
    const { state } = useContext(Context);
    const { allUsers, currentUser } = state;

    // Find the active user
    const currentUserObj = allUsers.find(user => user.userId === currentUser);

    return (
        <header>
            <h1 className="heading">OnjaBook</h1>
            <nav>
                <MenuListStyle>
                    <li>
                        <Link to="/">
                            Feed
                        </Link>
                    </li>
                    <li>
                        <Link to="/addPost">Add post</Link>
                    </li>
                    <li>
                        {currentUserObj && 
                            <Link to="/options" className="userName">
                                <span>{currentUserObj.userName}</span>
                                <img className="profile" src={currentUserObj.userProfile} alt={currentUserObj.userName} />
                            </Link>
                        }
                    </li>
                </MenuListStyle>
            </nav>
        </header>
    )
}

export default Header
