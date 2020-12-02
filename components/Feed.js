import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../pages/Context';
import FeedPost from './FeedPost';

const ArticleStyle = styled.article`
    section {
        padding-top: 30px;
        &:not(:last-child) {
            border-bottom: 1px solid gray;
            padding-bottom: 40px;
        }
    }
`;


function Feed() {
    const { state } = useContext(Context);
    const { allFeed } = state; 
    return (
        <ArticleStyle>
            {allFeed.map(feed => (<FeedPost key={feed.id} feed={feed} />))}
        </ArticleStyle>
    )
}

export default Feed
