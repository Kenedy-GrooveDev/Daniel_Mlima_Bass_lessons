import React, { useState } from "react";
import { useData } from "./VideoDataContext"; // assuming this exports the hook with context state

const AdminForm = () => {
  // Get videoStore and setter from context instead of local state
  const { videoStore, setVideoStore } = useData();

  // Local states for controlled inputs
  const [title, setLessonTitle] = useState<string>("");
  const [desc, setDescription] = useState<string>("");
  const [stage, setLevel] = useState<string>("");
  const [link, setYoutubeLink] = useState<string>("");

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add new video info to global videoStore in context
    setVideoStore([
      ...videoStore,
      {
        lessonTitle: title,
        description: desc,
        level: stage,
        youtubeLink: link,
      },
    ]);

    // Clear inputs
    setDescription("");
    setLessonTitle("");
    setLevel("");
    setYoutubeLink("");
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          className="border-2"
          placeholder="Lesson Title"
          value={title}
          onChange={(e) => setLessonTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Level"
          value={stage}
          onChange={(e) => setLevel(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="YouTube Video Link"
          value={link}
          onChange={(e) => setYoutubeLink(e.target.value)}
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AdminForm;
