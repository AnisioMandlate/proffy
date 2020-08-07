import React from "react";
import "./styles.css";
import PageHeader from "../PageHeader";
import TeacherItem from "../TeacherItem";
import Input from "../Input";
import Select from "../Select";

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Historia", label: "Historia" },
              { value: "Matematica", label: "Matematica" },
              { value: "Desenho", label: "Desenho" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Fisica", label: "Fisica" },
              { value: "Ingles", label: "Ingles" },
              { value: "Portugues", label: "Portugues" },
              { value: "Frances", label: "Frances" },
              { value: "Geografia", label: "Geografia" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input name="time" label="Hora" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
