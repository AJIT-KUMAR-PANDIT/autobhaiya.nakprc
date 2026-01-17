export default function HistoryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        Ride History
      </h1>
      <p className="text-gray-500 dark:text-gray-400">No recent rides found.</p>
    </div>
  );
}
