import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S'];
 * @param {Array<string>} TiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K'];
 * @returns {Array} deck de cartas 
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) {
        throw new Error('Tipos de carta son obligatorios');
    }
    if (!TiposEspeciales || TiposEspeciales.length === 0) {
        throw new Error('Tipos especiales son obligatorios');
    }
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of TiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}