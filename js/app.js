/**
 * Created by itihell.mejia on 7/4/2019.
 */
var t = '';
var n1 = 0;
var n2 = 0;
var numeros = [];
var sorteos = 0;

var timer = $.timer(function () {
    n = rellenar(n1, getRandomInt(1, n1));
    $('#num').html(n);
});

var tdenerrifa = $.timer(function () {
    n = rellenar(n1, getRandomInt(1, n1));
    sorteos = validarNumeros(n);
    console.log(sorteos, parseInt(n2));
    if (sorteos === parseInt(n2)) {
        $('#botones').fadeOut();
        $('#num').addClass('heartBeat animated infinite');
        $('#winrifa').fadeOut();
    }
    $('#num').html(n);
    timer.stop();
    tdenerrifa.stop();
    rifaGanadora(n);
    pintarNumeros();
});

function pintarNumeros() {
    var a = numeros;
    var i = 1;
    a.forEach(function (value) {
        vhtml = '';
        $('#item-' + value).remove();
        console.log(value);
        vhtml = '<h3 class="col-lg-1 bg-danger" id="item-' + value + '"> <span class="badge bg-warning">' + i + '</span>' + value + '</h3>';
        $('#numeros').append(vhtml);
        i += 1;
    });
}


var timerrenglon = $.timer(function () {
    n = rellenar(n2, getRandomInt(1, n2));
    $('#num2').html(n);
});

var tdenerrenglon = $.timer(function () {
    n = rellenar(n2, getRandomInt(1, n2));
    $('#num2').html(n);
    timerrenglon.stop();
    tdenerrenglon.stop();
});

function validarNumeros(n) {
    var a = numeros;
    if (a.length > 0) {
        a.forEach(function (e) {
            if (e == n) {
                return;
            }
        });
    }
    numeros.push(n);
    return a.length;
}


function rifaGanadora(n) {
    /*$('#rifa').toggle('slow');*/
    $('#winrifa').addClass('aniRifaBase');
    $('#winrifa').fadeIn();
    $('#winrifa').html(n.toString());
    n = rellenar(n2, 0);
    $('#num2').html(n);
    $('#renglon').fadeIn('slow');
    if (sorteos === parseInt(n2)) {
        $('#winrifa').fadeOut();
    }
}


$(document).ready(function () {
    $('#vtitle').fadeOut();
    $('#rifa').fadeOut();
    $('#renglon').fadeOut();
    $('#winrifa').fadeOut();
});

function aceptarSetup() {
    var n;
    if ($('#n1').val() == '') {
        alert('Debe especificar los números a jugar')
    } else if ($('#n2').val() == '') {
        alert('Debe especificar el número de sorteos')
    } else if ($('#title').val() == '') {
        alert('Debe especificar el título de rifa')
    } else {
        n1 = $('#n1').val();
        n2 = $('#n2').val();
        t = $('#title').val();
        $('#vtitle').html(t);

        $('#formsetup').fadeOut('slow');
        $('#vtitle').fadeIn('show');

        n = rellenar(n1, 0);

        $('#num').html(n);

        $('#rifa').toggle('slow');
        $('#renglon').fadeOut('slow');
        $('#winrifa').fadeOut();
    }
}

function rellenar(n, d) {
    var l = 0;
    var l2 = 0;
    var f = 0;
    var ceros = '';
    if (n != '') {

        d = d.toString();

        l = n.length;
        l2 = d.length;
        f = l - l2;


        for (i = 1; i <= f; i++) {
            ceros = ceros + '0';
        }

        ceros = ceros + d.toString();

    }
    return ceros;

}

function showSetup() {
    $('#formsetup').toggle('slow');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function iniciarRifa() {
    $('#winrifa').fadeOut();
    timer.set({time: 100, autostart: true});
}

function detenerRifa() {
    timer.set({time: 150, autostart: true});
    tdenerrifa.set({time: 5000, autostart: true});
}

function iniciarRenglon() {
    timerrenglon.set({time: 100, autostart: true});
}

function detenerRenglon() {
    timerrenglon.set({time: 180, autostart: true});
    tdenerrenglon.set({time: 5000, autostart: true});
}