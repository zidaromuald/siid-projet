import Post from "../enfants/Post.tsx";


interface Post {
    id: number;
    text: string;
    image: string | null;
}

interface PublicationProps {
    posts: Post[];
}

export default function Publication({ posts }: PublicationProps) {
    return (
        <div>
            <h3 className="text-base font-semibold mb-2">Mes publications</h3>
            {posts.map((post) => (
                <div key={post.id} className="bg-white p-2 rounded shadow-sm mb-2 w-72 text-sm">
                    <p className="text-xs">{post.text}</p>
                    {post.image && (
                        <img
                            src={post.image}
                            alt="Post"
                            className="mt-1 w-full max-h-32 object-cover rounded"
                        />
                    )}
                </div>
            ))}
        </div>
    );
}