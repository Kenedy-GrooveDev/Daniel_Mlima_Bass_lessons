import React, { useEffect, useState } from "react"

interface VideosInfo {
  lessonTitle: string;
  description: string;
  level: string;
  youtubeLink: string;
}

const AdminForm = () => {

  const [title, setLessonTitle] = useState<string>("")
  const [desc, setDescription] = useState<string>("")
  const [stage, setLevel] = useState<string>("")
  const [link, setYoutubeLink] = useState<string>("")
  const [videoStore, setVideoStore] = useState<VideosInfo[]>([])

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("form submitted")
    setVideoStore((prevVideo) =>[...prevVideo, {
    lessonTitle: title,
    description: desc,
    level: stage,
    youtubeLink: link
  }])
  setDescription("")
  setLessonTitle("")
  setLevel("")
  setYoutubeLink("")
    
  }

  useEffect(() => {
    if (videoStore.length > 0) console.log(videoStore)
  }, [videoStore])

  return (
    <div>
      <form onSubmit={handleSubmission}>
      <input type="text" className="border-2" placeholder="Lesson Title" value={title} onChange={(e) => setLessonTitle(e.target.value)}/><br/>
      <input type="text" placeholder="Description" value={desc} onChange={(e) => setDescription(e.target.value)}/><br/>
      <input type="text" placeholder="Level" value={stage} onChange={(e) => setLevel(e.target.value)}/><br/>
      <input type="text" placeholder="YouTube Video Link" value={link} onChange={(e) => setYoutubeLink(e.target.value)}/><br/>
      <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default AdminForm