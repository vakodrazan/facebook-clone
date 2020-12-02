import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../pages/Context';

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .heading {
        font-weight: normal;
        font-size: 18px;
    }

    .list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        font-size: 16px;

        li {
            padding: 3px;
        }

        .userName {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
            span {
                padding-right: 3px;
            }
        }
    }
`;

function Header() {
    const { state, dispatch } = useContext(Context);
    const { allUsers, currentUser } = state;

    const findUser = allUsers.find(user => user.userId === 13888379833130);
    // dispatch({ type: "USER_LOGGED_IN", currentUser: findUser})
    
    if (!findUser) return null;


    return (
        <HeaderStyle>
            <h1 className="heading">OnjaBook</h1>
            <ul className="list">
                <li>
                    <Link to="/">
                        Feed
                    </Link>
                </li>
                <li>
                    <Link to="/addPost">Add post</Link>
                </li>
                <li>
                    <Link to="/options" className="userName">
                        <span>{findUser.userName}</span>
                        <img className="profile" src={findUser.userProfile} alt={findUser.userName} />
                    </Link>
                </li>
            </ul>
        </HeaderStyle>
    )
}

export default Header
