(() => {
    const bannerId = 'vuelingPromoBanner';
    const styleId = 'vuelingPromoStyles';
    const newsletterUrl = 'https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela';
    const displayDelayMs = 3000;
    const animationDurationMs = 500;


    if (document.getElementById(bannerId)) {
        console.warn('[Vueling CRO] Promotional banner is already active in the DOM.');
        return;
    }


    function injectStyles() {
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = `
            .promoBanner {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 365px;
                max-width: calc(100vw - 48px);
                padding: 24px;
                box-sizing: border-box;
                background-color: #FFFFFF;
                color: #000000;
                border: 1px solid #E5E5E5;
                border-top: 8px solid #FFF000;
                border-radius: 14px;
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
                font-family: VuelingPilcrow, Arial, sans-serif;
                z-index: 999999;
                transform: translateX(125%);
                opacity: 0;
                transition: transform ${animationDurationMs}ms ease, opacity ${animationDurationMs}ms ease;
            }

            .promoBannerVisible {
                transform: translateX(0);
                opacity: 1;
            }

            .promoHeader {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 12px;
                margin-bottom: 10px;
            }

            .promoTitle {
                margin: 0;
                font-size: 23px;
                font-weight: 700;
                line-height: 1.15;
                text-transform: uppercase;
            }

            .btnClose {
                flex-shrink: 0;
                width: 32px;
                height: 32px;
                background-color: #F4F4F4;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                line-height: 1;
                color: #000000;
                cursor: pointer;
            }

            .btnClose:hover {
                background-color: #FFF000;
            }

            .promoDescription {
                margin: 0 0 14px 0;
                font-size: 14px;
                line-height: 1.45;
                color: #333333;
            }

            .visuallyHidden {
                position: absolute;
                width: 1px;
                height: 1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
            }

            .emailInput {
                width: 100%;
                padding: 12px 14px;
                box-sizing: border-box;
                font-family: VuelingPilcrow, Arial, sans-serif;
                font-size: 14px;
                border: 2px solid #CCCCCC;
                border-radius: 8px;
                outline: none;
            }

            .emailInput:focus {
                border-color: #000000;
            }

            .inputValid {
                border-color: #198754;
            }

            .inputInvalid {
                border-color: #DC3545;
            }

            .validationMessage {
                min-height: 18px;
                margin: 6px 0 0 0;
                font-size: 12px;
                font-weight: 700;
            }

            .messageValid {
                color: #198754;
            }

            .messageInvalid {
                color: #DC3545;
            }

            .promoFooter {
                margin-top: 8px;
            }

            .btnSubmit {
                width: 100%;
                padding: 13px 18px;
                background-color: #FFF000;
                color: #000000;
                font-family: VuelingPilcrow, Arial, sans-serif;
                font-size: 15px;
                font-weight: 700;
                text-transform: uppercase;
                border: none;
                border-radius: 1.375rem;
                cursor: pointer;
            }

            .btnSubmit:enabled:hover {
                background-color: #E5D700;
            }

            .btnSubmit:disabled {
                opacity: 0.45;
                cursor: not-allowed;
            }
        `;
        document.head.appendChild(styleElement);
        return styleElement;
    }


    function buildBanner() {
        const bannerAside = document.createElement('aside');
        bannerAside.id = bannerId;
        bannerAside.className = 'promoBanner';
        bannerAside.setAttribute('role', 'dialog');
        bannerAside.setAttribute('aria-labelledby', 'promoTitle');

        const promoHeader = document.createElement('header');
        promoHeader.className = 'promoHeader';

        const promoTitle = document.createElement('h2');
        promoTitle.id = 'promoTitle';
        promoTitle.className = 'promoTitle';
        promoTitle.textContent = '¡Vuela al mejor precio con nuestra newsletter!';

        const btnClose = document.createElement('button');
        btnClose.type = 'button';
        btnClose.className = 'btnClose';
        btnClose.setAttribute('aria-label', 'Cerrar ventana promocional de newsletter');
        btnClose.textContent = '×';

        promoHeader.append(promoTitle, btnClose);

        const promoDescription = document.createElement('p');
        promoDescription.className = 'promoDescription';
        promoDescription.textContent = 'Suscríbete y recibe antes que nadie ofertas exclusivas, descuentos en vuelos e ideas para tu próximo destino.';

        const promoForm = document.createElement('form');
        promoForm.noValidate = true;

        const emailLabel = document.createElement('label');
        emailLabel.htmlFor = 'promoEmail';
        emailLabel.className = 'visuallyHidden';
        emailLabel.textContent = 'Correo electrónico';

        const emailInput = document.createElement('input');
        emailInput.id = 'promoEmail';
        emailInput.type = 'email';
        emailInput.className = 'emailInput';
        emailInput.placeholder = 'Introduce tu correo electrónico';
        emailInput.required = true;

        const validationMessage = document.createElement('p');
        validationMessage.className = 'validationMessage';
        validationMessage.setAttribute('aria-live', 'polite');

        const promoFooter = document.createElement('footer');
        promoFooter.className = 'promoFooter';

        const btnSubmit = document.createElement('button');
        btnSubmit.type = 'submit';
        btnSubmit.className = 'btnSubmit';
        btnSubmit.textContent = '¡Quiero apuntarme!';
        btnSubmit.disabled = true;

        promoFooter.appendChild(btnSubmit);
        promoForm.append(emailLabel, emailInput, validationMessage, promoFooter);
        bannerAside.append(promoHeader, promoDescription, promoForm);
        document.body.appendChild(bannerAside);

        return { bannerAside, btnClose, promoForm, emailInput, validationMessage, btnSubmit };
    }


    function isValidEmail(emailValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(emailValue.trim());
    }


    function showBanner(bannerElement) {
        requestAnimationFrame(() => {
            bannerElement.classList.add('promoBannerVisible');
        });
    }


    function closeBanner(bannerElement, styleElement) {
        bannerElement.classList.remove('promoBannerVisible');
        setTimeout(() => {
            bannerElement.remove();
            styleElement.remove();
        }, animationDurationMs);
    }


    const injectedStyles = injectStyles();
    const uiElements = buildBanner();

    uiElements.emailInput.addEventListener('input', () => {
        const currentValue = uiElements.emailInput.value.trim();
        const isEmpty = currentValue === '';
        const isValid = isValidEmail(currentValue);

        uiElements.emailInput.classList.toggle('inputValid', !isEmpty && isValid);
        uiElements.emailInput.classList.toggle('inputInvalid', !isEmpty && !isValid);
        uiElements.validationMessage.classList.toggle('messageValid', !isEmpty && isValid);
        uiElements.validationMessage.classList.toggle('messageInvalid', !isEmpty && !isValid);

        if (isEmpty) {
            uiElements.validationMessage.textContent = '';
        } else if (isValid) {
            uiElements.validationMessage.textContent = 'Correo electrónico válido';
        } else {
            uiElements.validationMessage.textContent = 'Introduce un correo válido (ej. nombre@dominio.com)';
        }

        uiElements.btnSubmit.disabled = !isValid;
    });

    uiElements.promoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (isValidEmail(uiElements.emailInput.value)) {
            window.location.href = newsletterUrl;
        }
    });

    uiElements.btnClose.addEventListener('click', () => {
        closeBanner(uiElements.bannerAside, injectedStyles);
    });

    
    setTimeout(() => {
        showBanner(uiElements.bannerAside);
    }, displayDelayMs);
})();