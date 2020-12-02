import React, { useContext } from 'react'
import styled from 'styled-components';
import { Context } from '../pages/Context';
import AddComment from './AddComment';
import CommentPost from "./CommentPost";

const HeaderUsername = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

const Heading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    span {
        padding-left : 10px;
    }
`

function FeedPost({feed}) {

    const { state } = useContext(Context);
    const { allUsers, allFeed } = state;

    const currentUser = allUsers.find(user => user.userId === feed.userId);
    if (!currentUser) return null;   

    const postingDate = new Date(feed.date);
    const postDate = `${postingDate.getDate()}/${postingDate.getMonth() + 1}/${postingDate.getFullYear()}`;

    const likeLength = feed.like.length;

    function updateLike(id) {
        const findUser = allFeed.find(item => item.id === id)
        const increaseLike = likeLength + 1
        console.log(increaseLike);
    }


    return (
        <section key={feed.id}>
            <HeaderUsername>
                <Heading>
                    <img className="profile" src={currentUser.userProfile} alt={currentUser.userName} />
                    <span key={feed.id} >{currentUser.userName}</span>
                </Heading>
                <span>{postDate}</span>
            </HeaderUsername>
            <div>
                <p>{feed.description}</p>
                <img src={feed.photo} alt=" post" />
                <div>
                    <button onClick={() => updateLike(feed.id)}>Like</button>
                    <span>{likeLength} likes</span>
                </div>
            </div>

            <CommentPost feed={feed} HeaderUsername={HeaderUsername} Heading={Heading} />
            <AddComment feed={feed} />

        </section>
    )
}

export default FeedPost
