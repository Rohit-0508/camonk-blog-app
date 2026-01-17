import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";
import { type Blog } from "../types/blog";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { Loader2 } from "lucide-react";


export default function AddBlogModal() {
    const queryClient = useQueryClient();

    const [open, setOpen] = useState(false);
    const [titleError, setTitleError] = useState("");

    const initialState: Omit<Blog, "id"> = {
        title: "",
        category: [],
        description: "",
        date: new Date().toISOString(),
        coverImage: "",
        content: "",
    };

    const [formData, setFormData] = useState<Omit<Blog, "id">>(initialState);

    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            setFormData(initialState);
            setOpen(false);
        }
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name === "title") {
            setTitleError("");
        }

        if (name === "category") {
            setFormData({
                ...formData,
                category: value.split(",").map((c) => c.trim()),
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    const handleSubmit = () => {
        if (!formData.title.trim()) {
            setTitleError("Title is required");
            return;
        }

        mutation.mutate(formData);
    };


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full cursor-pointer">+ Add Blog</Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Create New Blog</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                    />
                    {titleError && (
                        <p className="text-xs text-red-500 mt-1">
                            {titleError}
                        </p>
                    )}

                    <Input
                        name="category"
                        placeholder="Categories (comma separated)"
                        onChange={handleChange}
                    />

                    <Input
                        name="coverImage"
                        placeholder="Cover image URL"
                        onChange={handleChange}
                    />

                    <Textarea
                        name="description"
                        placeholder="Short description"
                        onChange={handleChange}
                        className="resize-none wrap-break-word overflow-y-auto max-h-24"
                    />

                    <Textarea
                        name="content"
                        placeholder="Full blog content"
                        rows={6}
                        onChange={handleChange}
                        className="resize-none wrap-break-word overflow-y-auto max-h-40 whitespace-pre-wrap"
                    />


                    <Button
                        onClick={handleSubmit}
                        disabled={mutation.isPending}
                        className="w-full cursor-pointer"
                    >
                        {mutation.isPending ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Saving
                            </>
                        ) : (
                            "Save Blog"
                        )}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}