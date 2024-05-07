export class NSbutton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const icon = this.getAttribute("data-icon");
        const variant = this.getAttribute("data-variant");
        const slot = "Button";

        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            <button class="button">
                ${
                    (icon && `<iconify-icon icon="${icon}"></iconify-icon>`) || ""
                }
                <span class="label">
                    <slot></slot>
                </span>
            </button>
        `;

        if (variant) {
            this.shadowRoot.querySelector(".button").classList.add(`variant-${variant}`);
        }
    }
}

const css = `
    .button {
        display: inline-flex;
        align-items: space-between;
        justify-content: center;
        padding: 8px;
        gap: 8px;
        text-align: center;

        background-color: #166df7;
        border-radius: 5px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;

        font-family: sans-serif;
    }
        .variant-success {
            background-color: #3cba02;
            color: #ffffff;
        }

        .variant-error {
            background: #dd050c;
            color: #fff;
        }
`;