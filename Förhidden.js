document.addEventListener('DOMContentLoaded', function() {
    const shown = document.getElementById('shown');
    const hidden = document.getElementById('hidden');
    const body = document.body;


     function hide(state) {
        if (state === 'shown') {
            body.classList.add('hidden');
            body.classList.remove('shown');
        } else {
            body.classList.add('shown');
            body.classList.remove('hidden');
        }
    }


});
