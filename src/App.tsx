import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 overflow-hidden">

      <div className="md:col-span-1 h-full overflow-y-auto border-r md:pr-4">
        <BlogList onSelect={setSelectedBlogId} />
      </div>


      <div className="md:col-span-2 h-full overflow-hidden">
        {selectedBlogId ? (
          <BlogDetail blogId={selectedBlogId} />
        ) : (
          <p className="text-gray-400 text-xl text-center">
            Select a blog to view details
          </p>
        )}
      </div>
    </div>
  );
}
