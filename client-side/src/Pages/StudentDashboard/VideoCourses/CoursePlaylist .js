import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoursePlaylist = () => {
  const { course } = useParams();
  const [playlistIds, setPlaylistIds] = useState([]);

  // Define a mapping of courses to their array of YouTube playlist IDs
  const courseToPlaylistIds = {
    "First": ["PL-vEH_IPWrhA_ZY8FH4Tr6L_zi9uPgVRc", "ANOTHER_PLAYLIST_ID"],
     // Replace with actual YouTube Playlist IDs
    // ... other courses
  };

  const subject = ["Maths", "Eng Physic"];

  useEffect(() => {
    // Set the playlist IDs array based on the course parameter
    const ids = courseToPlaylistIds[course];
    if (ids) {
      setPlaylistIds(ids);
    } else {
      console.error("Playlist IDs not found for course:", course);
    }
  }, [course]);

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">{course} Course Playlists</h1>
      {playlistIds.length === 0 ? (
        <p className="text-center text-red-600">No playlists available for this course.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {playlistIds.map((id, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Playlist ${index}`}
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{subject[index]}</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursePlaylist;
