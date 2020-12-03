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

    // Crab the state from the context
    const { state, dispatch } = useContext(Context);
    const { allUsers, allFeed, currentUser } = state;

    // Find the the user by its id
    const postedUser = allUsers.find(user => user.userId === feed.userId);
    if (!postedUser) return null;   

    const postingDate = new Date(feed.date);
    const postDate = `${postingDate.getDate()}/${postingDate.getMonth() + 1}/${postingDate.getFullYear()}`;

    // Update the like
    function updateLike(postId) {
        const isAlreadyLiked = feed.likes.some(like => like.userId === currentUser.userId);
        if (!isAlreadyLiked) {
            // Increase it when the user hasn't liked it yet
            const updatedPost  = allFeed.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        likes: [...post.likes, currentUser]
                    }
                }
                return post
            })
            dispatch({ type: "UPDATE_LIKE", allFeed: updatedPost });
        } else {
            // Unlike it if the same user like it again
            const updatedPost  = allFeed.map(post => {
                if (post.id === postId) {
                    const newLike = post.likes.filter(like => like.userId !== currentUser.userId);
                    return {
                        ...post,
                        likes: newLike
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
                    <span>{feed.likes && feed.likes.length} likes</span>
                </div>
            </div>

            <CommentPost feed={feed} HeaderUsername={HeaderUsername} Heading={Heading} />
            <AddComment feed={feed} />

        </section>
    )
}

export default FeedPost
