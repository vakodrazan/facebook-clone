import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function Comment({feed, HeaderUsername, Heading}) {
    const { state } = useContext(Context);
    const { allUsers } = state;

    return (
        <ul>
            {feed.comments.map(comment => {
                // find the user's id to crab the name and the profile
                const commentUser = allUsers.find(user => user.userId === comment.userId);
                const date = new Date(comment.commentDate);
                const postDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

                return (
                    <li key={comment.commentId}>
                        <HeaderUsername>
                            <Heading>
                                <img className="profile" src={commentUser.userProfile} alt={commentUser.userName} />
                                <span>{commentUser.userName}</span>
                            </Heading>
                            <span>{postDate}</span>
                        </HeaderUsername>
                        <p>{comment.commentMessage}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Comment