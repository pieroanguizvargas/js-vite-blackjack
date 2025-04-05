import _ from 'underscore';
/**
 * 
 * @param {Array<String>} deck un array de cartas
 * @returns {String} retorna la carta que se pide
 */

// Esta función me permite tomar una carta
// pedirCarta();
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {

        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}