import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

// to fetch the data 


// export const fetchPosts = () => {
//   return api.get("/posts");
// };


export const fetchPosts = async () => {
    const res = await api.get("/posts");
    return res.status === 200 ? res.data : [];
};


// const getPostsData = async () => {
//         try {
//             const res = await fetchPosts();
//            return res.status === 200 ? res.data : [];
//         } catch (error) {
//             console.log(error);
//             return [];
//         }
//     };