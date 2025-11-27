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
    

    return (
        <div>
            <h1>Infinite Scroll with React Query v5</h1>

            {data?.pages?.map((page, index) => (
                <ul key={index}>
                    {page.map((user) => (
                        <li
                        key={user.id}
                        style={{ padding: "10px", border: "1px solid #ccc" }}
                        >
                        <p>{user.login}</p>
                        <img
                        src={user.avatar_url}
                        alt={user.login}
                        width={50}
                        height={50}
                         />
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}