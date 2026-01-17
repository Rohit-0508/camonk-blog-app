const COLORS = [
    "bg-blue-200 text-blue-900",
    "bg-green-200 text-green-900",
    "bg-purple-200 text-purple-900",

    "bg-pink-200 text-pink-900",
    "bg-yellow-200 text-yellow-900",
    "bg-orange-200 text-orange-900",

    "bg-red-200 text-red-900",
    "bg-indigo-200 text-indigo-900",
    "bg-teal-200 text-teal-900",

    "bg-cyan-200 text-cyan-900",
    "bg-lime-200 text-lime-900",
    "bg-fuchsia-200 text-fuchsia-900",
];

export function getCategoryColor(category: string): string {
    let hash = 0;
    for (let i = 0; i < category.length; i++) {
        hash = category.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash) % COLORS.length;
    return COLORS[index];
}
