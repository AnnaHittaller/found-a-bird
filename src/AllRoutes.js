import { Route, Routes } from "react-router-dom";
import BirdingLinks from "./components/BirdingLinks";
import Questionnaire from "./components/Questionnaire";
import TitlePage from "./components/TitlePage";
import Carousel from "./components/Carousel";
import HomePage from "./components/HomePage";
import About from "./components/About";
import NotFound from "./components/NotFound";
import PhotoGallery from "./components/PhotoGallery";

export default function AllRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<TitlePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/gallery" element={<PhotoGallery />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/useful-links" element={<BirdingLinks />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
