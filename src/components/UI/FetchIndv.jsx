import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchInvPost } from "../../API/api";

export const FetchIndv = () => {
    const { id } = useParams();
    
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post"], //useState
        queryFn: () => fetchInvPost(id), // useEffect
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p> Error: {error.message || "Something went wrong!"} Something went wrong!</p>;
    

    return (
        <>
            <ul className="section-accordion">
                <li>
                    <p>ID: {data[0].id}</p>
                </li>
            </ul>
        </>
    )
};