import React, { useState } from "react";
import "./styles.css";
import PageHeader from "../PageHeader";
import Input from "../Input";
import warnigIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../TextArea";
import Select from "../Select";

const TeacherForm = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewSchedule() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse
formulário de inscrição."
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input name="cost" label="Custo da aula por hora" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewSchedule}>
              + Novo horário
            </button>
          </legend>
          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
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
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warnigIcon} alt="Aviso Importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
