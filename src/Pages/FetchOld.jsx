import { useEffect, useState } from "react";
import { fetchPostsData } from "../API/api";

export const FetchOld = () => {
    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        try {
            const res = await fetchPostsData();
            if (res.status === 200) {
                setPosts(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    return (
        <div>
            <ul className="section-accordion">
                {posts?.map((curElem) => {
                    const { id, title, body } = curElem;
                    return (
                        <li key={id}>
                            <p>{title}</p>
                            <p>{body}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
