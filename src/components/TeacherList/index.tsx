import React from "react";
import "./styles.css";
import PageHeader from "../PageHeader";

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars2.githubusercontent.com/u/4643304?s=400&u=e9c051805fc50658102e4ee25b632b67c85ced3b&v=4"
              alt="Teacher Profile Pic (Anisio Mandlate)"
            />
          </header>
        </article>
      </main>
    </div>
  );
};

export default TeacherList;
