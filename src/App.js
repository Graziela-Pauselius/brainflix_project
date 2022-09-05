import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoInfo from "./components/VideoInfo/VideoInfo";

import "./App.scss";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="videos/:videoId" element={<VideoInfo />} />
				</Route>

				<Route path="/upload" element={<UploadPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
