var expect = require("chai").expect;
var logica = require("../js/logicajs"); 

describe("Probando funciones de validacion de datos", function () {
    describe("Validando la funcion validarEdad", function () {
        it("Verificando la función: validarEdad(50) => correcto", function () {
            result = logica.validarEdad(55);
            expect(result).equal(true);
        });
        
        it("Verificando la función: validarEdad(-11) => incorrecto", function () {
            result = logica.validarEdad(0);
            expect(result).equal(false);
        });
    });


    describe("Validando la funcion validarAnio", function () {
        it("Verificando la función: validarEdad(1999) => correcto", function () {
            result = logica.validarAnio(1999);
            expect(result).equal(true);
        });
        
        it("Verificando la función: validarEdad(199) => incorrecto", function () {
            result = logica.validarAnio(199);
            expect(result).equal(false);
        });
    });
});

describe("Validando la funcion para guardar nuevas tarjetas", function () {
    it("Verificando la función: guardar(nom, 55, 1999) => correcto", function () {
        result = logica.guardar("nom", 55, 1999);
        expect(result).length.above(50)
    });
    
    it("Verificando la función: guardar(nom, 55, 199) => incorrecto", function () {
        result = logica.guardar("nom", 55, 199);
        expect(result).include("Error");
    });
});

//npm test
//--
