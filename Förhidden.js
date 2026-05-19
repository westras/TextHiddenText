document.addEventListener('DOMContentLoaded', function() {
    const formulär = document.getElementById('formulär');
    const textomrade = document.getElementById('textomrade');
    const doltFält = document.getElementById('doltFält');
    const utskrift = document.getElementById('utskrift');

    formulär.addEventListener('submit', function(event) {
        event.preventDefault();

        const text = textomrade.value.trim();
        if (!text) {
            return;
        }

        doltFält.value = text;
        textomrade.classList.remove('shown');
        textomrade.classList.add('hidden');

        utskrift.textContent = text;
        utskrift.classList.remove('hidden');
        utskrift.classList.add('shown');
    });
});

/*/ jag tyckte förhidden lät roligt, så jag döpte javascript till det /*/