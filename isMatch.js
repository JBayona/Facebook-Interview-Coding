/*

Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true

https://leetcode.com/problems/regular-expression-matching/#/description

*/

var isMatch = function(s, p) {
    var lenS = s.length,
        lenP = p.length;
    
    if (p.length === 0) {
        /*Aquí vamos a determinar si ambos son vacios que significa true, de lo contrario si "s" es mayor a cero y "p" que es 
        nuestra regex no, es mayor a cero, significa que no hemos hecho match*/
        return s.length === 0;
    }
    
    //Vamos a verificar si nuestro segundo caracter es "*"
    if (p.charAt(1) === '*') {
        /*Volveremos a llamar la función recursiva quitando el regex por ejemplo c*, si quitando el caracter tiene 
        la misma letra inicial o el punto, podemos recortar ambas cadenas, eso va a pasar en el else de abajo, si no
        tienen las mismas cadenas, vamos a eliminar la primer letra de nuestra "s" que es nuestra cadena original, esto
        es porque podemos tener ninguna o muchas repeticiones y las iremos elimando hasta que podamos verificar si hace
        match o no */
        return isMatch(s, p.substr(2)) || s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p);
    } else {
        /*if s.length - falsy (evaluado a false en boolean) regresa false, de lo contrario verifica la cadena 
        (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') y si es true regresa isMatch(s.substr(1), p.substr(1))
        */
        /*return a && b means
          if (a) return b;
            else return a;
        */
        return s.length > 0 && (s.charAt(0) === p.charAt(0) || p.charAt(0) === '.') && isMatch(s.substr(1), p.substr(1));
    }

};

/*
https://www.youtube.com/watch?v=l3hda49XcDE
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // s = string, p = pattern
    let dp = new Array(s.length+1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(p.length+1).fill(false);
    }
    
    // In case there's empty string for s and p
    dp[0][0] = true;
    
    //Deal with column 0 cases for patterns like a*, a*b* or a*b*c*
    // To set true or false for the first column
    for(let i = 1; i < dp[0].length; i++){
        if(p[i-1] === '*') {
            dp[0][i] = dp[0][i-2];
        }
    }
    
    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[0].length; j++) {
            if(p[j-1] === '.' || p[j-1] === s[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            }else if(p[j-1] === '*') {
                dp[i][j] = dp[i][j-2];
                if(p[j-2] === '.' || p[j-2] === s[i-1]){
                    dp[i][j] = dp[i][j] || dp[i-1][j];
                }
            }else {
                dp[i][j] = false;
            }
        }
    }
    
    return dp[s.length][p.length]
};

s = "aab";
p = "c*a*b";
console.log(isMatch(s,p));
