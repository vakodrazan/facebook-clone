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

    const { state, dispatch } = useContext(Context);
    const { allUsers, allFeed, currentUser } = state;

    const postedUser = allUsers.find(user => user.userId === feed.userId);
    if (!postedUser) return null;   

    const postingDate = new Date(feed.date);
    const postDate = `${postingDate.getDate()}/${postingDate.getMonth() + 1}/${postingDate.getFullYear()}`;

    function updateLike(postId) {
        const isAlreadyLiked = feed.like.some(item => item.userId === currentUser.userId);
        if (!isAlreadyLiked) {
            const updatedPost  = allFeed.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        like: [...post.like, currentUser]
                    }
                }
                return post
            })
            dispatch({ type: "UPDATE_LIKE", allFeed: updatedPost });
        } else {
            const updatedPost  = allFeed.map(post => {
                if (post.id === postId) {
                    const newLike = post.like.filter(like => like.id !== currentUser.userId);
                    // console.log(newLike.length - 1);
                    return {
                        ...post,
                        like: newLike
                    }
                }
                return post
            })
            dispatch({ type: "UPDATE_LIKE", allFeed: updatedPost });
            
        }
    }

    return (
        <section key={feed.id}>
            <HeaderUsername>
                <Heading>
                    <img className="profile" src={postedUser.userProfile} alt={postedUser.userName} />
                    <span key={feed.id} >{postedUser.userName}</span>
                </Heading>
                <span>{postDate}</span>
            </HeaderUsername>
            <div>
                <p>{feed.description}</p>
                <img src={feed.photo} alt=" post" />
                <div>
                    <button onClick={() => updateLike(feed.id)}>Like</button>
                    <span>{feed.like.length} likes</span>
                </div>
            </div>

            <CommentPost feed={feed} HeaderUsername={HeaderUsername} Heading={Heading} />
            <AddComment feed={feed} />

        </section>
    )
}

export default FeedPost
