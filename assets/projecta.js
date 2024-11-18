function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(err => console.error('Error loading the file: ', err));
}

$(document).ready(function() {
    $("#header-placeholder").load("parts/header.html", function(response, status, xhr) {
        if (status == "error") {
            console.log("Error loading header:", xhr.status, xhr.statusText);
        }

        $("#page-loader").fadeOut("fast");
    });
});