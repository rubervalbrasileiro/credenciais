

function enviarMensagem() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("subject").value;
  const mensagem = document.getElementById("message").value;


  // WHATSAPP
  const textoWhatsapp = `*Novo Contato via Formulário*\n\n👤 Nome: ${nome}\n📧 Email: ${email}\n📌 Assunto: ${assunto}\n📝 Mensagem: ${mensagem}`;
  const numeroWhatsapp = "5581985251699";
  const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(textoWhatsapp)}`;
  window.open(urlWhatsapp, "_blank");


  // EMAIL
  const destinatario = "aquitembrasileiro@gmail.com";
  const assuntoEmail = `Formulário: ${assunto}`;
  const corpoEmail = `Nome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`;
  const urlEmail = `mailto:${destinatario}?subject=${encodeURIComponent(assuntoEmail)}&body=${encodeURIComponent(corpoEmail)}`;
}

emailjs.init({
  publicKey: "0s9ONNCkIxm2Wt1xH",
  });

  document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    }

    //console.table(formData);  /*exibi os dados do console da página de email.*/

    const serviceID = "service_fhy3nnp";
    const templateID = "template_pkb5mpg";
    const submitButton = document.getElementById("submit_button");
    submitButton.textContent = "Enviando..."
    submitButton.ariaDisabled = "true";

    // alert("Tudo Certo"); abri uma caixa de aviso mais é necessário uma confirmação
    emailjs.send(serviceID, templateID, formData)
    .then(() => {

      Toastify({
        text: "E-mail enviado com sucesso!",
        style: {
          background: "#28a745",
          color: "#f4f4f4"
        },
      }).showToast();

      document.getElementById("contact_form").reset();
    })

    .catch((erro) => {
       Toastify({
        text: "Erro ao enviar o e-mail !",
        style: {
          background: "#dc3545",
          color: "#f4f4f4"
        },
      }).showToast();

      console.error("Erro no envio", erro)
    })

    .finally(() => {
      submitButton.textContent = "Enviar mensagem"
      submitButton.ariaDisabled = "false";
    })

  });