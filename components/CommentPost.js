import React, { useContext } from 'react'
import { Context } from '../pages/Context';

function Comment({feed, HeaderUsername, Heading}) {
    const { username, profile } = useContext(Context);

    const commentCurrentDate = new Date(feed.commentDate);
    const commentDate = `${commentCurrentDate.getDate()}/${commentCurrentDate.getMonth() + 1}/${commentCurrentDate.getFullYear()}`;
    const replyCurrentDate = new Date(feed.replyDate);
    const replyingDate = `${replyCurrentDate.getDate()}/${replyCurrentDate.getMonth() + 1}/${replyCurrentDate.getFullYear()}`;

    return (
        <ul>
            {feed.commentDate && 
                <li>
                    <HeaderUsername>
                        <Heading>
                            <img className="profile" src={feed.commenter} alt={feed.commenterUsername} />
                            <span>{feed.commenterUsername}</span>
                        </Heading>
                        <span>{commentDate}</span>
                    </HeaderUsername>
                    <p>{feed.comment}</p>
                </li>
            }
            {feed.replyDate && 
                <li>
                    <HeaderUsername>
                        <Heading>
                            <img className="profile" src={profile} alt={username} />
                            <span>{username}</span>
                        </Heading>
                        <span>{replyingDate}</span>
                    </HeaderUsername>
                    <p>{feed.replyMessage}</p>
                </li>
            }
        </ul>
    )
}

export default Comment
