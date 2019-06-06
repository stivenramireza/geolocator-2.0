$(document).ready(function () {
    $('#alert1').hide();
    $('#alert2').hide();

    $('#btnRegister').click(function () {
        var displayNameUser = $("#inputDisplayName").val();
        var emailUser = $("#inputEmail").val();
        var passwordUser = $("#inputPassword").val();
        var passwordRepeatUser = $("#inputRepeatPassword").val();

        if (displayNameUser == '' || emailUser == '' || passwordUser == '' || passwordRepeatUser == '') {
            $('#alert1').html('Completa todos los campos, intenta de nuevo!');
            $('#alert1').show();

        } else if (passwordUser != passwordRepeatUser) {
            $('#alert1').html('Las contraseñas no coinciden, intenta de nuevo!');
            $('#alert1').show();

        } else {
            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "http://backend-topicos-telematica.tk/api/signup",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "email": emailUser,
                    "displayName": displayNameUser,
                    "password": passwordUser
                })
            }

            $.ajax(settings).done(function (data) {
                Cookies.set('token', data.token);
                Cookies.set('userId', data.userId);
                Cookies.set('userName', data.userName);
                Cookies.set('userEmail', data.userEmail);

                window.location.replace('/profile');

            }).fail(function (data) {
                $('#alert1').html(data.responseJSON.message);
                $('#alert1').show();
            });

        }
    });

    $('#btnLogin').click(function () {
        window.location.replace('/signin');
    });
});
