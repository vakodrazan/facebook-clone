import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../pages/Context';

function Comment({feed, HeaderUsername, Heading}) {
    const { allComments, setAllComments } = useContext(Context);

    return (
        <ul>
                {feed.comments.map(comment => {
                    return (
                        <li key={comment.id}>
                            <HeaderUsername>
                                <Heading>
                                    <img className="profile" src={comment.commenterProfile} alt={comment.commenterUsername} />
                                    <span>{comment.commenterUsername}</span>
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