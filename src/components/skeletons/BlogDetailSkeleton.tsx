import { Card, CardContent } from "../ui/card";

export default function BlogDetailSkeleton() {
  return (
    <Card className="flex flex-col w-full h-full overflow-y-auto no-scrollbar">
      <CardContent className="p-6 space-y-4 animate-pulse">

        <div className="w-full h-64 bg-gray-200 rounded" />


        <div className="flex gap-2">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>


        <div className="h-7 w-3/4 bg-gray-300 rounded" />


        <div className="h-4 w-32 bg-gray-200 rounded" />


        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-full bg-gray-200 rounded"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
