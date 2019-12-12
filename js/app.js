const contact_form = document.querySelector('#contact_form');
contact_form.addEventListener('submit', (e) => {
    e.preventDefault();

    Materialize.toast('<span class="text-green">Email Sent Successfully</span>', 4000);
    $('#contact').modal('close');
    contact_form.reset();

});