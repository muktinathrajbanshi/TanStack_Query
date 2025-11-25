import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";

export const FetchRQ = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'], //useState
        queryFn: fetchPosts, // useEffect
        // gcTime: 1000,
        // staleTime: 10000,
        refetchInterval: 1000,
        refetchIntervalInBackground: true,
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
                            <p>{title}</p>
                            <p>{body}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};