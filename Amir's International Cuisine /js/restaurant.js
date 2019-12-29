$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    })
})

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pno = document.getElementById('pno').value;
    var addinfo = document.getElementById('addinfo').value;
    var isFormValid = name && email && pno && addinfo;
    if (isFormValid) {
        alert('Form data was valid and submitted');
    }
    else {
        alert('Please fill valid information');
    }
}