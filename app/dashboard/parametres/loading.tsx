export default function Loading() {
  return (
    <div className="flex-1 space-y-8 p-8">
      <div className="space-y-2 animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="h-4 w-96 bg-gray-200 rounded" />
      </div>
      <div className="grid gap-6">
        <div className="h-96 bg-gray-100 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}
