// src/components/AnnouncementBoard.js

import React, { useState } from 'react';

const AnnouncementBoard = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  const handleAddAnnouncement = () => {
    if (newAnnouncement.trim()) {
      setAnnouncements([...announcements, newAnnouncement]);
      setNewAnnouncement('');
    }
  };

  return (
    <div className="announcement-board bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Announcement Board</h2>
      <div className="announcements-list mb-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement p-2 border-b">
            {announcement}
          </div>
        ))}
      </div>
      <input
        type="text"
        className="border p-2 rounded w-full mb-2"
        value={newAnnouncement}
        onChange={(e) => setNewAnnouncement(e.target.value)}
        placeholder="Type your announcement..."
      />
      <button
        onClick={handleAddAnnouncement}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Post Announcement
      </button>
    </div>
  );
};

export default AnnouncementBoard;
