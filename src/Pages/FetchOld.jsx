import { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

export const FetchOld = () => {

    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        try {
            const res = await fetchPosts();
            // console.log(res);
            res.status === 200 ? setPosts(res.data) : [];
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    useEffect(() => {
        getPostData();
    }, [])

    return (
        <h1>hello FetchOld</h1>
    );
};