document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MENU DROPDOWN
    // ==========================================
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownMenu) {
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.style.display = 'none';
                setTimeout(() => {
                    dropdownMenu.style.display = '';
                }, 100);
            });
        });
    }

    // ==========================================
    // 2. SLIDERS (ANTES E DEPOIS)
    // ==========================================
    const sliderInput = document.getElementById('slider-input');
    const beforeImage = document.getElementById('before-image');
    const sliderLine = document.getElementById('slider-line');

    if (sliderInput && beforeImage && sliderLine) {
        sliderInput.addEventListener('input', (e) => {
            const value = e.target.value;
            sliderLine.style.left = `${value}%`;
            beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        });
    }

    const sliderInputColchao = document.getElementById('slider-input-colchao');
    const beforeImageColchao = document.getElementById('before-image-colchao');
    const sliderLineColchao = document.getElementById('slider-line-colchao');

    if (sliderInputColchao && beforeImageColchao && sliderLineColchao) {
        sliderInputColchao.addEventListener('input', (e) => {
            const value = e.target.value;
            sliderLineColchao.style.left = `${value}%`;
            beforeImageColchao.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        });
    }

    // ==========================================
    // 3. CARROSSEIS (ESTOFADOS, IMPER, COLCHÃO)
    // ==========================================
    const trackEstofados = document.getElementById('carousel-track');
    const prevEstofados = document.getElementById('carousel-prev');
    const nextEstofados = document.getElementById('carousel-next');

    if (trackEstofados && prevEstofados && nextEstofados) {
        const getScrollAmount = () => trackEstofados.clientWidth;
        nextEstofados.addEventListener('click', () => { trackEstofados.scrollLeft += getScrollAmount(); });
        prevEstofados.addEventListener('click', () => { trackEstofados.scrollLeft -= getScrollAmount(); });
    }

    const trackImper = document.getElementById('carousel-track-imper');
    const prevImper = document.getElementById('carousel-prev-imper');
    const nextImper = document.getElementById('carousel-next-imper');

    if (trackImper && prevImper && nextImper) {
        const getScrollAmount = () => trackImper.clientWidth;
        nextImper.addEventListener('click', () => { trackImper.scrollLeft += getScrollAmount(); });
        prevImper.addEventListener('click', () => { trackImper.scrollLeft -= getScrollAmount(); });
    }

    const trackColchao = document.getElementById('carousel-track-colchao');
    const prevColchao = document.getElementById('carousel-prev-colchao');
    const nextColchao = document.getElementById('carousel-next-colchao');

    if (trackColchao && prevColchao && nextColchao) {
        const getScrollAmount = () => trackColchao.clientWidth;
        nextColchao.addEventListener('click', () => { trackColchao.scrollLeft += getScrollAmount(); });
        prevColchao.addEventListener('click', () => { trackColchao.scrollLeft -= getScrollAmount(); });
    }

    // ==========================================
    // 4. ENVIO DO FORMULÁRIO DE ORÇAMENTO (API)
    // ==========================================
    const budgetForm = document.getElementById('form-orcamento');

    if (budgetForm) {
        budgetForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(budgetForm);
            
            const budgetData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                state: formData.get('state'),
                neighborhood: formData.get('neighborhood'),
                zipCode: formData.get('zipCode'),
                serviceType: formData.get('serviceType'),
                message: formData.get('message') || ''
            };

            try {
                const response = await fetch('https://api-production-d6e9.up.railway.app/budgets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(budgetData)
                });

                if (!response.ok) {
                    const errorResponse = await response.json();
                    console.error('Erro retornado pela API:', errorResponse);
                    alert('Ops! Verifique se os dados inseridos estão corretos.');
                    return;
                }

                const result = await response.json();
                console.log('Orçamento salvo com sucesso!', result);
                alert('Orçamento enviado com sucesso! Aguarde o nosso contato.');
                
                budgetForm.reset();
                
                const submitButton = document.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerText = 'Enviando...';

            } catch (error) {
                console.error('Erro de conexão:', error);
                alert('Não foi possível conectar ao servidor. O seu Back-End está ligado?');
            }
        });
    }

});