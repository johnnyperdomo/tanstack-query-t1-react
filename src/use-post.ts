import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Data = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

//useQuery - for get requests
//useMutation - for everything else (post ; patch)

export const usePost = (postId: number) => {
    //getting
    return useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            );

            return data as Data;
        },
        onSuccess(data) {
            //handle success here
            console.log(data);
        },
        onError(err) {
            //handle the error
            console.log(err);
        },
    });

    // return { data, isLoading };

    //posting, putting
    // const { data1, isLoading1, isError1 } = useMutation({
    //     mutationFn: async () => {
    //         const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts/1", {
    //             myval: "string",
    //         });

    //         return data as Data;
    //     },
    // });
};
