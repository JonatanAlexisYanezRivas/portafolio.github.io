const btnEnvio = document.getElementById('sendEmail');

btnEnvio.addEventListener('click',function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const asunt = document.getElementById('asunt').value;
    window.location.href='mailto:Jonatan.Alexis.Yanez.Rivasisc1999@outlook.com.to?subject=envioDesdeFormulario&body=Name%3A${name}%0AEmail%3A${email}%0ACompany%3A${company}%0AAsunt%3A${asunt}';
})