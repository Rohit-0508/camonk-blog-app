import { useQuery } from "@tanstack/react-query";
import { fetchBlogs } from "../api/blogs";
import { type Blog } from "../types/blog";
import { Card, CardContent } from "./ui/card";
import AddBlogModal from "./AddBlogModal";
import { getCategoryColor } from "../utils/randomColor";
import BlogListSkeleton from "./skeletons/BlogListSkeleton";

interface BlogListProps {
    onSelect: (id: number) => void;
}

export default function BlogList({ onSelect }: BlogListProps) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    });

    const sortedBlogs = [...(data ?? [])].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );



    if (isLoading) return <BlogListSkeleton />;
    if (isError) return <p>Something went wrong</p>;

    return (
        <div className="h-full flex flex-col ">
            <div className="sticky top-0 z-10 pb-3">
                <AddBlogModal />
                <p className="text-lg font-bold text-gray-500 mt-2">
                    Latest Blogs
                </p>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pt-2">
                {sortedBlogs?.map((blog: Blog) => (
                    <Card
                        key={blog.id}
                        className="cursor-pointer hover:bg-gray-50 shadow-sm hover:shadow-md"
                        onClick={() => onSelect(blog.id)}
                    >
                        <CardContent className=" flex flex-col gap-2 p-4 ">
                            <p className="text-xs  text-gray-500">
                                {blog.category.map((cat) => (
                                    <span
                                        key={cat}
                                        className={`text-xs px-2 mr-2 py-1 rounded ${getCategoryColor(cat)}`}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </p>
                            <h2 className="font-semibold text-lg">
                                {blog.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {blog.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );

}