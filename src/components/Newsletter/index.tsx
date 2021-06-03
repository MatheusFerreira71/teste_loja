import { ChangeEvent, useState } from 'react';
import { ReactComponent as NewsletterIcon } from '../../assets/svg/newsletter.svg';
import { NewsletterForm } from '../../interfaces';
import './style.scss';

const Newsletter = () => {
  const [formData, setFormData] = useState<NewsletterForm>({ email: '', nome: '' });

  function handleFormChanges(event: ChangeEvent<HTMLInputElement>) {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const button = document.getElementById('submitNews') as HTMLElement;
    const hint = document.getElementById('email-error') as HTMLElement;
    const { name, value } = event.target;

    if (name === 'email') {
      if (event.target.value.match(regex)) {
        event.target.style.border = "none";
        button.removeAttribute('disabled');
        hint.style.display = "none";
        setFormData({ ...formData, [name]: value });
      } else {
        event.target.style.border = "1px solid var(--primary)";
        button.setAttribute('disabled', 'disabled');
        hint.style.display = "block";
      }
    } else if (name === 'nome') {
      if (event.target.value === '') {
        button.setAttribute('disabled', 'disabled');
      } else {
        button.removeAttribute('disabled');
        setFormData({ ...formData, [name]: value });
      }
    }

  }

  function newsLetterSubmit() {
    if (formData.email !== '' && formData.nome !== '') {
      alert(`Newsletter cadastrado para ${formData.nome} no e-mail ${formData.email}`);
    }
  }


  return (
    <section className="newsletter">
      <header>
        <NewsletterIcon />
        <h2>Receba nossas novidades, descontos e muito mais</h2>
      </header>

      <div className="form">
        <div className="form-field">
          <input type="text" placeholder="Digite seu nome" name="nome" onChange={handleFormChanges} />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="error" id="email-error">Email inválido</label>
          <input type="text" placeholder="Digite seu email" name="email" onChange={handleFormChanges} />
        </div>
      </div>

      <button type="button" id="submitNews" onClick={newsLetterSubmit}>Eu quero receber as novidades</button>

    </section>
  );
}

export default Newsletter;