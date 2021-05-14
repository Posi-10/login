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

    $('#btn_entrar').click(() => {
        $.ajax({
            type: 'POST',
            data: {
                "usuario": $('#input_login_usuario').val(),
                "pass": $('#input_login_pass').val()
            },
            url: 'control/control_login.php',
            success: (r) => {
                console.log(r)
                if (r.trim() == 1 || r.trim() == $('#input_login_usuario').val()) {
                    window.location = "inicio"
                } else {
                    SwalOverlayColor("rojo");
                    swal({
                        title: "Error",
                        text: "¡No te encontramos, mejor registrate!",
                        icon: "error",
                        button: false,
                        timer: 1500,
                    });
                }
            }
        });
    });

    $('#btn_registro').click(() => {
        window.location = "registro"
    });
});