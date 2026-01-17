import { Card, CardContent } from "../ui/card";

export default function BlogListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i} className="shadow-sm">
          <CardContent className="p-4 space-y-3 animate-pulse">

            <div className="flex gap-2">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-12 bg-gray-200 rounded" />
            </div>

            <div className="h-5 w-3/4 bg-gray-300 rounded" />

            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
