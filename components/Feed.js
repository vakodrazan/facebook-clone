import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../pages/Context';

const ArticleStyle = styled.article`
    .header-username {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
    }

    section {
        padding-top: 30px;
        &:not(:last-child) {
            border-bottom: 1px solid gray;
            padding-bottom: 40px;
        }
    }

`;

function Feed() {
    const { allFeed } = useContext(Context);
    return (
        <ArticleStyle>
            {allFeed.map(feed => (
                <section>
                    <header className="header-username">
                        <span key={feed.id} >{feed.userName}</span>
                        <img className="profile" src="https://iili.io/Fwvaat.jpg" alt="Noeline Marie" />
                    </header>
                </section>
            ))}
        </ArticleStyle>
    )
}

export default Feed
