export default function Loading() {
  return (
    <div className="flex-1 space-y-8 p-8 animate-pulse">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full" />
        <div className="space-y-2">
          <div className="h-8 w-48 bg-gray-200 rounded" />
          <div className="h-4 w-64 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="h-96 bg-gray-100 rounded-lg" />
    </div>
  )
}
