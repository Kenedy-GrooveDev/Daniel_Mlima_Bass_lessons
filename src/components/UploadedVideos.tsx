import {useData} from "./VideoDataContext"

const UploadedVideos = () => {

  const {videoStore} = useData()

  return (
    <>
      <div>
      <h3>Uploaded Videos:</h3>
      <ul>
        {videoStore.map((video, index) => (
          <li key={index}>
            <strong>{video.lessonTitle}</strong><br />
            {video.description} <br />
            {video.level} <br />
            <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default UploadedVideos