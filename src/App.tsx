import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AdminForm from "./components/AdminForm"
import { DataProvider } from "./components/VideoDataContext"
import UploadedVideos from "./components/UploadedVideos"

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <nav>
            <Link to="/upload" style={{ marginRight: 8 }}>Upload Video</Link>
            <Link to="/display">View Uploaded Videos</Link>
          </nav>
          <Routes>
            <Route path="/upload" element={<AdminForm />} />
            <Route path="/display" element={<UploadedVideos />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}

export default App