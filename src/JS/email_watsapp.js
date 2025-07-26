
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

  setTimeout(() => {
    window.location.href = urlEmail;
  }, 1500);
}

