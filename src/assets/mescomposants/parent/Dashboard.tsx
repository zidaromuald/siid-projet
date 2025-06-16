import Post from "../enfants/Post.tsx";
import Profil from "../enfants/Profil.tsx";
import {useState} from "react";
import Publication from "../enfants/Publication.tsx";

interface Post {
    id: number;
    text: string;
    image: string | null;
}

export default function Dashboard () {
    const [posts, setPosts] = useState<Post[]>([]);

    const handleNewPost = (post: Post) => {
        setPosts([post, ...posts]);
    };

    return (
        <div className="flex flex-col space-y-4 bg-gray-100 p-6 max-w-md mx-auto rounded-lg">
            <div className="flex space-x-4">
                <div className="w-1/4">
                    <Profil />
                </div>

                <div className="w-3/4 ml-6">
                    <Post onPost={handleNewPost} />
                </div>
            </div>
            <div className="w-full">
                <Publication posts={posts} />
            </div>
        </div>
    );
}