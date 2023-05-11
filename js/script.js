const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const formato = num => {
    if(num < 10) {
        return `0${num}`
    } else {
        return num;
    }
}

const tiempoRestante = tiempo => {
    let ahora = new Date();
    let fechaLimite = (new Date(tiempo) - ahora + 1000) / 1000;

    let segRestantes = formato(Math.floor(fechaLimite % 60));
    let minRestantes = formato(Math.floor(fechaLimite / 60 % 60));
    let horasRestantes = formato(Math.floor(fechaLimite / 3600 % 24));
    let diasRestantes = formato(Math.floor(fechaLimite / (3600 * 24)));

    return {
        fechaLimite,
        segRestantes,
        minRestantes,
        horasRestantes,
        diasRestantes
    }
}

const actualizarFecha = tiempo => {

    const timer = setInterval(() => {
        let id = tiempoRestante(tiempo);
        
        segundos.innerText = id.segRestantes;
        minutos.innerText = id.minRestantes;
        horas.innerText = id.horasRestantes;
        dias.innerText = id.diasRestantes;

        if(id.fechaLimite <= 1) {
            clearInterval(timer);
            segundos.innerText = '00';
            minutos.innerText = '00';
            horas.innerText = '00';
            dias.innerText = '00';
        }

    }, 1000)

    

}

actualizarFecha('Thu Jan 30 2023 09:34:50 GMT-0500');