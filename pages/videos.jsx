import { useState } from "react";

import VidDisplayListItem from "../components/VidDisplayListItem";
import Wrapper from "../components/Wrapper";
import YoutubeStats from "../components/YoutubeStats";
import { fetchData } from "../lib/utils";

export default function Videos({ stats, videos }) {
  console.log(videos);
  const [searchValue, setSearchValue] = useState("");
  const sortedVids = videos
    .sort((a, b) =>
      Number(new Date(b.snippet.publishedAt) - Number(new Date(a.snippet.publishedAt))),
    )
    .filter((vid) => vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Wrapper>
      <div>
        <YoutubeStats stats={stats} />
        <input
          type="text"
          placeholder="Search here...."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mt-3 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
        />
      </div>

      {sortedVids && sortedVids.map((vid) => <VidDisplayListItem key={vid.id.videoId} vid={vid} />)}
    </Wrapper>
  );
}

export async function getStaticProps() {
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;

  async function getData() {
    const statsData = fetchData(statisticsURL);
    const uploadsData = fetchData(uploadsURL);

    return {
      stats: await statsData,
      videos: await uploadsData,
    };
  }

  const { stats, videos } = await getData();
  return {
    revalidate: 86400,
    props: {
      stats: stats.items[0].statistics,
      videos: videos.items,
    },
  };
}
