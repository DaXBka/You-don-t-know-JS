const input = document.querySelector('#input');
const p = document.querySelector('p');

const setText = () => {
    p.textContent = input.value;
};

function debounce(f, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && this.lastCall - previousCall <= t) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
    };
}

input.addEventListener('input', debounce(setText, 300));
