"use client";
import getEmbedUrl from "@/utils/newsFuntion";
import { useEffect, useState } from "react";

export default function BreakingNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>⏳ Breaking News Loading...</p>;
  }

  return (
    <div className=" p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center drop-shadow-sm">
        🔥 Breaking News
      </h2>

      {news?.length === 0 ? (
        <p className="text-center text-gray-500">No news available...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news?.map((item, index) => {
            const embedUrl = getEmbedUrl(item.media);

            return (
              <div
                key={index}
                className="group transition transform hover:scale-105 hover:shadow-xl duration-300 p-4 bg-white shadow rounded-xl border border-gray-200"
              >
                {embedUrl?.includes("youtube.com/embed") ? (
                  <iframe
                    width="100%"
                    height="230"
                    src={embedUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg mb-3"
                  ></iframe>
                ) : embedUrl?.includes("drive.google.com/file") ? (
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="230"
                    allow="autoplay"
                    className="rounded-lg mb-3"
                  ></iframe>
                ) : embedUrl?.endsWith(".mp4") ||
                  embedUrl?.endsWith(".webm") ? (
                  <video
                    src={embedUrl}
                    controls
                    className="w-full rounded-lg mb-3"
                  />
                ) : (
                  <img
                    src={embedUrl}
                    alt={item.title}
                    className="w-full h-56 object-cover rounded-lg mb-3"
                  />
                )}

                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-600 transition">
                  {item.title}
                </h3>
             
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
