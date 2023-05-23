import MainLayout from "../layouts/MainLayout";
import HomeButton from "./HomeButton";

export default function NotFound() {
  return (
    <>
      <MainLayout />
      <div className="content">
        <h1 style={{ marginBottom: "2rem" }}>
          Oops, this page has flown away!
        </h1>
        <p>Try it again from the home page:</p>
        <HomeButton />
      </div>
    </>
  );
}
