import { Outlet } from "react-router-dom";
import { resume } from "../data/resume";
import ScrollProgress from "./ScrollProgress";

export default function Layout() {
  const p = resume.person;

  return (
    <>
      <ScrollProgress />

      <header className="header">
        <div className="topbar">
          <div className="brand">
            <b>{p.name}</b>
            <span>{p.title}</span>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {p.name}
      </footer>
    </>
  );
} 