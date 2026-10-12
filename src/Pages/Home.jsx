import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <main className="container-fluid py-4">
      <div className="row g-4 align-items-start">
        <aside className="col-12 col-lg-3">
          <Sidebar />
        </aside>
        <section className="col-12 col-lg-9">
          <Dashboard />
        </section>
      </div>
    </main>
  );
};

export default Home;
