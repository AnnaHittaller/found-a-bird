import Header from "../components/Header";
import "./mainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
}
