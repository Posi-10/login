$(document).ready(() => {
    $('#btn_salir').click(() => {
        $.ajax({
            type: 'POST',
            url: 'control/control_salir.php',
            success: () => {
                window.location = "login";
            }
        });
    });
});