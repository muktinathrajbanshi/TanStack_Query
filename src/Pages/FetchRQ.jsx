import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {

    const [pageNumber, setPageNumber] = useState(0);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'], //useState
        queryFn: fetchPosts(pageNumber), // useEffect 
        
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p> Error: {error.message || "Something went wrong!"} Something went wrong!</p>;

    return (
        <div>
            <ul className="section-accordion">
                {data?.map((curElem) => {
                    const {id, title, body} = curElem;
                    return (
                        <li key={id}>
                         <NavLink to={`/rq/${id}`}>
                            <p>{id}</p>
                            <p>{title}</p>
                            <p>{body}</p>
                         </NavLink>
                        </li>
                    );
                })}
            </ul>
            <div className="pagination-section container">
                <button>Prev</button>
                <h2>{pageNumber}</h2>
                <button>Next</button>
            </div>
        </div>
    );
};