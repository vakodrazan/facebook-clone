import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
                <li className="userName">
                    <span>Noeline Marie</span>
                    <img className="profile" src="https://iili.io/Fwvaat.jpg" alt="Noeline Marie" />
                </li>
            </ul>
        </HeaderStyle>
    )
}

export default Header
