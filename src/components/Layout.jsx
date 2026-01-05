import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { resume } from "../data/resume";

export default function Layout() {
  const p = resume.person;

  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="brand">
            <b>{p.name}</b>
            <span>{p.title}</span>
          </div>
          <Nav />
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {p.name} • built with React
      </footer>
    </>
  );
}
