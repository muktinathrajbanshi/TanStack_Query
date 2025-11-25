import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { fetchInvPost } from "../../API/api";

export const FetchIndv = () => {
    const { id } = useParams();
    
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id], //useState
        queryFn: () => fetchInvPost(id), // useEffect
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p> Error: {error.message || "Something went wrong!"} Something went wrong!</p>;
    

    return (
        <div>
            <ul className="section-accordion">
            <h1>Post ID Number - {id}</h1>
                <div>
                    <p>ID: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                </div>
                <NavLink to="/rq">
                <button>Go Back</button>
                </NavLink>
            </ul>
        </div>
    )
};