/**
 * The core of the functions.
 */
var utils = {};
/**
    * Throws an error with your specified type and text.
    * Example:
    * ```js
    * utils.throwError(Error,'text');
    * // expected output: Error: text
    * ```
    * You can use different types of errors, such as SyntaxError, TypeError, etc.
    * @param {Error} type The error type.
    * @param {string} text The error text.
*/
utils.throwError = function(type,text){
    throw new type(text);
}
/**
 * Chooses a random item from an array.
 * Example:
 * ```js
 * console.log(utils.randomItem([1,2,3,4,5]))
 * ```
 * This code can choose between 1 and 5.
 * Not only numbers, but also strings, and more!
 * @param {Array} array Array to pick an item from
 */
utils.randomItem = function(array){
    if(typeof array!=='object') throw new TypeError(`Parameter 1 must be of type object. Received ${typeof array}`);
    return array[Math.floor(Math.random()*array.length)];
}
/**
 * Makes the text separated in spaces and then uppercase.
 * Example:
 * ```js
 * console.log(utils.vaporwave('return'));
 * // expected output: "R E T U R N"
 * ```
 * @param {string} text The text to vaporwave
 */
utils.vaporwave = function(text){
    if(typeof text!=='string') throw new TypeError(`Parameter 1 must be of type string. Received ${typeof text}`);
    var string = text;
    var characters = [];
    if(string.length===1){
        throw new SyntaxError('Can\'t vaporwave one letter')
    }
    for(let i=0;i<string.length;i++){
        var scanword = string.charAt(i);
        characters.push(scanword)
        if(characters.length===string.length){
            return characters.join(' ').toUpperCase()
        }
    }
}
/**
 * Shuffles the text.
 * Example:
 * ```js
 * console.log(utils.shuffle('string'));
 * ```
 * That will output "string", just shuffled/scrambled.
 * @param {String} text The text to shuffle
 */
utils.shuffle = function(text){
    if(typeof text!=='string') throw new TypeError(`Parameter 1 must be of type string. Received ${typeof text}`);
    let string = text
    var chars = []
    let length = string.length
    if(length===1){
        throw new SyntaxError('Can\'t shuffle one letter')
    }
    for(let i=0;i<length;i++){
        let charat = string.charAt(i)
        chars.push(charat)
        if(chars.length===length){
            chars.sort((a,b)=>0.5-Math.random())
            return chars.join('')
        }
    }
}
/**
 * Converts a hex color to RGB.
 * Example:
 * ```js
 * console.log(utils.hexToRgb('#ff0000'));
 * ```
 * That will output an array, something like this: [255, 0, 0]
 * @param {string} hex The hex color to convert to RGB
 */
utils.hexToRgb = function(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return Object.values(result ? {
      r: parseInt(result[3], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[1], 16)
    } : null);
}
/**
 * This function makes the text random-cased.
 * Example:
 * ```js
 * console.log(utils.randomCase('number'))
 * ```
 * This will output "number", just cased in a random way.
 * @param {string} text 
 */
utils.randomCase = function(text){
    return text.split('').map(function(c){
        return c[Math.round(Math.random())?'toUpperCase':'toLowerCase']();
    }).join('');
}
/**
 * Converts the Celsius unit to the Fahrenheit unit.
 * @param {number} c
 * 
 */
utils.celsiusToFahrenheit = function(c){
    return c*9/5+32;
}
/**
 * Converts the Fahrenheit unit to the Celsius unit.
 * @param {number} f
 */
utils.fahrenheitToCelsius = function(f){
    return (f-32)*5/9
}

module.exports = utils;