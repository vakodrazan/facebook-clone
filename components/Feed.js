import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../pages/Context';

const ArticleStyle = styled.article`
    section {
        padding-top: 30px;
        &:not(:last-child) {
            border-bottom: 1px solid gray;
            padding-bottom: 40px;
        }
    }
`;

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
function Feed() {
    const { allFeed } = useContext(Context);
    return (
        <ArticleStyle>
            {allFeed.map(feed => {
                const postingDate = new Date(feed.date);
                const postDate = `${postingDate.getDate()}/${postingDate.getMonth() + 1}/${postingDate.getFullYear()}`;
                const commentCurrentDate = new Date(feed.commentDate);
                const commentDate = `${commentCurrentDate.getDate()}/${commentCurrentDate.getMonth() + 1}/${commentCurrentDate.getFullYear()}`;
                const replyCurrentDate = new Date(feed.replyDate);
                const replyingDate = `${replyCurrentDate.getDate()}/${replyCurrentDate.getMonth() + 1}/${replyCurrentDate.getFullYear()}`;

                return(
                    <section key={feed.id}>
                        <HeaderUsername>
                            <Heading>
                                <img className="profile" src={feed.profilePhoto} alt="Noeline Marie" />
                                <span key={feed.id} >{feed.userName}</span>
                            </Heading>
                            <span>{postDate}</span>
                        </HeaderUsername>
                        <div>
                            <p>{feed.description}</p>
                            <img src={feed.photo} alt={`${feed.userName}'s post`} />
                            <div>
                                <button>Like</button>
                                <span>{feed.like} likes</span>
                            </div>
                        </div>
                        <ul>
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
                            <li>
                                <HeaderUsername>
                                    <Heading>
                                        <img className="profile" src={feed.profilePhoto} alt={feed.userName} />
                                        <span>{feed.userName}</span>
                                    </Heading>
                                    <span>{replyingDate}</span>
                                </HeaderUsername>
                                <p>{feed.replyMessage}</p>
                            </li>
                        </ul>
                        <form>
                            <input type="text" placeholder="Add a comment..." />
                            <button aria-label="submit your comment">Post</button>
                        </form>
                    </section>
                )
            })}
        </ArticleStyle>
    )
}

export default Feed
