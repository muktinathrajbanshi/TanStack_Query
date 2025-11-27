import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";

export const InfiniteScroll = () => {

   const { data } = useInfiniteQuery({
        queryKey:["users"],
        queryFn:fetchUsers,
        getNextPageParam: (lastPage, allPages) => {
            console.log("lastPage", lastPage, allPages);
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
        },
    });

    console.log(data);
    

    return <h1>Infinite Scrool!</h1>;
}