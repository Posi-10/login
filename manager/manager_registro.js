$(document).ready(() => {

    const SwalColors = {
        rojo: "rgba(250, 0, 0, 0.45)",
        verde: "rgba(0, 250, 0, 0.45)",
        amarillo: "rgba(255, 233, 0, 0.45)"
    };

    function SwalOverlayColor(color) {
        setTimeout(() => {
            $(".swal-overlay").css({ "background-color": SwalColors[color] });
        }, 10);
    }

    $('#btn_registro').click(() => {
        $.ajax({
            type: 'POST',
            data: {
                "usuario": $('#input_registro_usuario').val(),
                "pass": $('#input_registro_pass').val()
            },
            url: 'control/control_registro.php',
            success: (r) => {
                if (r.trim() == 1) {
                    $('#form_registro')[0].reset();
                    SwalOverlayColor("verde");
                    swal({
                        title: "Correcto",
                        text: "¡Te almacenamos correctamente!",
                        icon: "success",
                        button: false,
                        timer: 1500,
                    });
                } else {
                    SwalOverlayColor("rojo");
                    swal({
                        title: "Error",
                        text: "¡Tenemos un error para almacenarte intanta mas tarde!",
                        icon: "error",
                        button: false,
                        timer: 1500,
                    });
                }
            }
        });
    });

    $('#btn_login').click(() => {
        window.location = "login"
    });
});