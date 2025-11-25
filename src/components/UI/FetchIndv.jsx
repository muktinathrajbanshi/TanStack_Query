import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchInvPost } from "../../API/api";

export const FetchIndv = () => {
    const { id } = useParams();
    
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post"], //useState
        queryFn: () => fetchInvPost(id), // useEffect
    });

    console.log(data);
    

    return <h1>Hello {id}</h1>;
};