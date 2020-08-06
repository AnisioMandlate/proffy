import React from "react";
import "./styles.css";
import PageHeader from "../PageHeader";
import Input from "../Input";
import warnigIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../TextArea";

const TeacherForm = () => {
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
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da aula por hora" />
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
