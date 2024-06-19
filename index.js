const express = require('express');
const app = express();
app.use(express.json());

var suma = 0;

app.get('/validar', (req, res) => { 
    const cedula = req.query.cedula;

    if (!cedula || cedula.length !== 10) {
        return res.send({ message: 'Es falsa' });
    }

   

    for (var i = 0; i < 9; i++) {
        var num = parseInt(cedula[i]);
        if (i % 2 === 0) {
            num *= 2;
            if (num > 9) num -= 9;
        }
        suma += num;
    }

    let n_calculo = 10 - (suma % 10);
    if (n_calculo === 10) n_calculo = 0;

    const n_cedula = parseInt(cedula[9]);

    if (n_calculo === n_cedula) {
        res.send({ message: 'Es verdadera' });
    } else {
        res.send({ message: 'Es falsa' });
    }
});

app.listen(3000, function () {
    console.log("Servidor escuchando en el puerto 3000");
});


