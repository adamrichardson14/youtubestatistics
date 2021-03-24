export default function YoutubeStats({ stats }) {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="px-4 py-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
          <dt className="font-medium text-cyan-300 truncate">Total Subscribers</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-200">{stats.subscriberCount}</dd>
        </div>

        <div className="px-4 py-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
          <dt className="font-medium text-cyan-300 truncate">Total Views</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-200">{stats.viewCount}</dd>
        </div>

        <div className="px-4 py-5 bg-gray-800 shadow rounded-md overflow-hidden sm:p-6">
          <dt className="font-medium text-cyan-300 truncate">Videos Uploaded</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-200">{stats.videoCount}</dd>
        </div>
      </dl>
    </div>
  );
}
