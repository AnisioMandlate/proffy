import React, { useState, FormEvent } from "react";
import "./styles.css";
import PageHeader from "../PageHeader";
import Input from "../Input";
import warnigIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../TextArea";
import Select from "../Select";
import api from "../../services";
import { useHistory } from "react-router-dom";
import rocketIcon from "../../assets/images/icons/rocket.svg";

const TeacherForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewSchedule() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }

  function handleSubmitClass(event: FormEvent) {
    event.preventDefault();
    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        history.push("/saved");
      })
      .catch(() => {
        alert("Ocorreu um erro no cadastro!");
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo, é preencher esse
formulário de inscrição."
        img={rocketIcon}
        text="Preparare-se!
Vai ser o máximo."
      />
      <main>
        <form onSubmit={handleSubmitClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="field-group">
              <div className="field">
                <Input
                  name="avatar"
                  label="Avatar"
                  value={avatar}
                  placeholder="https://www.example.com"
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
              <div className="field">
                <Input
                  name="whatsapp"
                  label="WhatsApp"
                  value={whatsapp}
                  placeholder="( ) _ _ _ _ _ _ _ _ _"
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Desenho", label: "Desenho" },
                { value: "Filosofia", label: "Filosofia" },
                { value: "Física", label: "Física" },
                { value: "Francês", label: "Francês" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Inglês", label: "Inglês" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Química", label: "Química" },
                {
                  value: "TIC",
                  label: "Tecnologias de Informação e Comunicação",
                },
              ]}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              name="cost"
              label="Custo da aula por hora"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewSchedule}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
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
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
