import Gallery from "react-photo-gallery";
import axios from "axios";
import "../styles/gallery.css";
import MainLayout from "../layouts/MainLayout";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
  const randomPage = Math.floor(Math.random() * 20) + 1;

  const fetchFotos = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=bird&page=${randomPage}&per_page=20`,
        {
          headers: {
            Authorization: API_KEY
          }
        }
      );
      if (response) {
        setPhotos(response.data.photos);
        //console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFotos();
  }, []);

  //console.log("rerender");
  let photoArray;

  const handleImageClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  if (photos) {
    photoArray = photos.map((photo) => {
      return {
        src: photo.src.large,
        width: photo.width,
        height: photo.height,
        photographer: photo.photographer,
        alt: photo.alt,
        onClick: { handleImageClick },
        "data-tooltip-id": "image-tooltip",
        "data-tooltip-content": `Photo by: ${photo.photographer}`,
        "data-tooltip-variant": "light",
        "data-tooltip-offset": "-60"
      };
    });
    //console.log(photoArray, "array");
  }

  return (
    <MainLayout>
      <h1 className="gallery-title">May your day be blessed with nice birds</h1>
      <h3>
        - Photos provided by{" "}
        <a className="test" href="https://www.pexels.com">
          Pexels
        </a>{" "}
        -
      </h3>
      {photos.length > 0 ? (
        <>
          <Gallery photos={photoArray} direction={"column"} margin={3} />
          <Tooltip
            id="image-tooltip"
            style={{ color: "#d49d85", backgroundColor: "#d1e6dd" }}
          />
        </>
      ) : (
        <p>Loading</p>
      )}
    </MainLayout>
  );
}
