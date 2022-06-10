// import { useEffect, useState } from "react";
// import * as postsAPI from '../../utilities/posts-api'
// import CommentForm from "../../components/CommentForm/CommentForm";

// export default function PostListPage() {
//     const [posts, setPosts] = useState([]);

//     useEffect(function() {
//         async function getPosts() {
//             setPosts(posts);
//         }
//         getPosts()
//     }, []);

//     async function handleAddComment(postData) {
//         const post = await postsAPI.add(postData);
//         setPosts([...posts, post]);
//     }
//     handleAddComment()
    
// }