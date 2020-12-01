import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../pages/Context';

function Comment({feed, HeaderUsername, Heading}) {
    const { allUsers } = useContext(Context);
    return (
        <ul>
                {feed.comments.map(comment => {
                    const commentUser = allUsers.find(user => user.userId === comment.userId);

                    return (
                        <li key={comment.commentId}>
                            <HeaderUsername>
                                <Heading>
                                    <img className="profile" src={commentUser.userProfile} alt={commentUser.userName} />
                                    <span>{commentUser.userName}</span>
                                </Heading>
                                <span></span>
                            </HeaderUsername>
                            <p>{comment.commentMessage}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Comment