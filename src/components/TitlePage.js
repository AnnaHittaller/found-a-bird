import Button from "./Button";
import MainLayout from "../layouts/MainLayout";

export default function TitlePage() {
  return (
    <>
      <MainLayout />
      <div className="titlepage-content">
        <h1>Hey! I found a bird!</h1>
        <Button type="outline" text="What should I do?" link="/home" />
      </div>
    </>
  );
}
