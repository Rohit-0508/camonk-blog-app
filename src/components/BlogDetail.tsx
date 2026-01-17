import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../api/blogs";
import { Card, CardContent } from "./ui/card";
import BlogDetailSkeleton from "./skeletons/BlogDetailSkeleton";
import { ImageOff } from "lucide-react";
import { DEFAULT_COVER_IMAGE } from "../constants/image";
import { useState } from "react";
import { getCategoryColor } from "../utils/randomColor";


interface BlogDetailProps {
    blogId: number;
}

export default function BlogDetail({ blogId }: BlogDetailProps) {

    const [imageError, setImageError] = useState(false);

    const {
        data: blog,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["blog", blogId],
        queryFn: () => fetchBlogById(blogId),
        enabled: !!blogId, // fetch only when id exists
    });

    if (isLoading) {
        return <BlogDetailSkeleton />;
    }

    if (isError || !blog) {
        return <p className="text-red-500">Failed to load blog</p>;
    }
    return (
        <Card className="h-full w-full overflow-y-auto scroll-smooth no-scrollbar">
            <CardContent className="p-6 space-y-4 min-h-full w-full">
                <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    {!imageError ? (
                        <img
                            src={blog.coverImage || DEFAULT_COVER_IMAGE}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="flex flex-col items-center text-gray-400">
                            <ImageOff size={48} />
                            <span className="text-sm mt-2">No image available</span>
                        </div>
                    )}
                </div>


                <div className="flex justify-between w-full">
                    <div>
                        <div className="flex gap-2 flex-wrap">
                            {blog.category.map((cat) => (
                                <span
                                    key={cat}
                                    className={`text-xs px-2 py-1 rounded ${getCategoryColor(cat)}`}
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-500 text-lg font-bold">
                        {new Date(blog.date).toLocaleDateString()}
                    </p>
                </div>

                <h1 className="text-3xl font-bold">{blog.title}</h1>

                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {blog.content}
                </p>
            </CardContent>
        </Card>
    );
}