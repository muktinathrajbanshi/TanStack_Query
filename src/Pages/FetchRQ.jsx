import { useEffect } from "react";
import { fetchPosts } from "../API/api";

export const FetchRQ = () => {


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

    useQuery({
        queryKey:["posts"], //useState
        queryFn:getPostData() // useEffect
    });

    return (
        <div>
            <ul className="section-accordion">
                {posts?.map((curElem) => {
                    const {id, title, body} = curElem;
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