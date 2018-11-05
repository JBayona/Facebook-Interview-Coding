/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.

https://leetcode.com/problems/add-and-search-word-data-structure-design/description/
*/

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.trie = {children: {}, count: 0, isWord: false};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for(let i = 0; i < word.length; i++) {
        //Asigna el nodo si lo encuentra o agrega un elemento para agregarlo al trie
        node.children[word[i]] = node.children[word[i]] || {children: {}, count: 0, isWord: false};
        // Recorre el nodo
        node = node.children[word[i]];
        // Cuenta las veces que se ha visto
        node.count++;
    }
    // Marca el end de la palabra
    node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let node = this.trie;
    return this.dfs(word, 0, node);
};


    WordDictionary.prototype.dfs = function(word, start, node) {
    // We need to verify the existence of node cause we
    // may be sending undefined values checking for the '.'
    if(start === word.length && node) {
        return node.isWord;
    }
    let c = word[start];
    if(c === '.') {
        // Check all possible letters in the alphabet to find is there is a word
        for(let i = 0; i < 26;  i++) {
            let letter = String.fromCharCode('a'.charCodeAt(0) + i); 
            if(node && node.children[letter] !== null && this.dfs(word, start+1, node.children[letter])) {
                return true;
            }
        }
    } else {
        if(node && node.children[c]){
            return this.dfs(word, start+1, node.children[c]);
        }
    }

    return false;
}
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


var obj = new WordDictionary(); // Object.create(WordDictionary); //.createNew();
obj.addWord("bad")
obj.addWord("dad")
obj.addWord("mad")
console.log(obj);
console.log(obj.search("pad")) // -> false
console.log(obj.search("bad")) // -> true
console.log(obj.search(".ad")) // -> true
console.log(obj.search("b..")) // -> true