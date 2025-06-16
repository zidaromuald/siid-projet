import { useState } from "react";

//Interface de publication qui va recuperer les donnees du post
interface Post {
    id: number;
    text: string;
    image: string | null;
}

interface PostProps {
    onPost: (post: Post) => void;
}
 // Nous avons definie les states de nos variables et props integré les arguments
export default function Post({ onPost }: PostProps) {
    const [text, setText] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newPost: Post = {
            id: Date.now(),
            text,
            image,
        };

        onPost(newPost);
        setText("");
        setImage(null);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-2 rounded shadow-sm mb-4 w-72">
        <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Exprimez-vous..."
            rows={2}
            className="w-full p-2 border border-gray-300 rounded mb-2 text-sm"
        />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-2 text-xs"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-2 py-1 text-sm rounded hover:bg-blue-700"
            >
                Publier
            </button>
        </form>
    );
}
