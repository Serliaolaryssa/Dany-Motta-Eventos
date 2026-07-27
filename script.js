// ABRIR E FECHAR MODAIS DE SERVIÇOS
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Desativa rolagem do fundo
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Reativa rolagem
    }
}

// Fechar modal ao clicar fora da área branca
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// TROCA DINÂMICA DA IMAGEM DE FUNDO DO SITE
const bgUploadInput = document.getElementById('bg-upload');

if (bgUploadInput) {
    bgUploadInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.body.style.backgroundImage = `url('${event.target.result}')`;
            };
            reader.readAsDataURL(file);
        }
    });
}

// ENVIO DE MENSAGEM PERSONALIZADA PARA O WHATSAPP DA DANIELE
function sendCustomWhatsApp(serviceName, nameInputId, detailInputId) {
    const nameValue = document.getElementById(nameInputId).value.trim();
    const detailValue = document.getElementById(detailInputId).value.trim();
    
    const phoneNumber = "5521985048268"; // WhatsApp da Daniele Motta
    
    let message = `Olá, Daniele! Gostaria de pedir/consultar o serviço: *${serviceName}*.\n\n`;
    
    if (nameValue !== "") {
        message += `*Meu Nome:* ${nameValue}\n`;
    }
    
    if (detailValue !== "") {
        message += `*Detalhes / Sabores Escolhidos:* ${detailValue}\n`;
    } else {
        message += `*Mensagem:* Olá! Não achei o sabor/serviço que queria no site e gostaria de conversar sobre orçamento personalizado.\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}