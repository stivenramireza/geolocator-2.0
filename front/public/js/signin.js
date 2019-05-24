$(document).ready(function () {
    $('#alert1').hide();
    $('#alert2').hide();

    $('#btnLogin').click(function () {
        var emailUser = $("#inputEmail").val();
        var passwordUser = $("#inputPassword").val();

        if (emailUser == '' || passwordUser == '') {
            $('#alert1').html('Completa todos los campos, intenta de nuevo!');
            $('#alert1').show();

        } else {
            var settings = {
                "async": false,
                "crossDomain": true,
                "url": "/api/signin",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                    "cache-control": "no-cache"
                },
                "data": JSON.stringify({
                    "email": emailUser,
                    "password": passwordUser
                })
            }

            $.ajax(settings).done(function (data) {
                Cookies.set('token', "Bearer " + data.token);
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

    $('#btnCreateAccount').click(function () { 
        window.location.replace('/signup');        
    });
});
