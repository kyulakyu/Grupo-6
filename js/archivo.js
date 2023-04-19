function revisavacios() {
    if (document.getElementById('nombre').value == "") {
        alert("Por favor ingrese su nombre");
        document.getElementById('nombre').style.borderColor = "red";
        return false;
    }
    if (document.getElementById('email').value == "") {
        alert("Por favor ingrese su email");
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
    if (document.getElementById('mensaje').value == "") {
        alert("Por favor déjenos un mensaje");
        document.getElementById('mensaje').style.borderColor = "red";
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function(){
    var table = document.getElementById('Tvalores');
    var dataTable = new DataTable(table, {
        "processing": true
    });
});