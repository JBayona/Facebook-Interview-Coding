/*
Given a trie, return a list of words that matches with a given prefix
*/

let trie = {children: {}, count: 0, string: null};
const addWord = function(word) {
  let node = trie;
  for(let i = 0; i < word.length; i++) {
    //Asigna el nodo si lo encuentra o agrega un elemento para agregarlo al trie
    node.children[word[i]] = node.children[word[i]] || {children: {}, count: 0, isWord: null};
    // Recorre el nodo
    node = node.children[word[i]];
    // Cuenta las veces que se ha visto
    node.count++;
  }
  // Marca el end de la palabra
  node.isWord = word;
}

// Add words to the tree
addWord('google');
addWord('good');
addWord('great');
// console.log(trie);

let result = [];
function findWords(prefix) {
  let node = trie;
  dfs(prefix, 0, node);
  return result;
}

function dfs(prefix, index, node) {
  if(index < prefix.length) {
    let letter = prefix[index];
    if(node.children[letter]) {
      dfs(prefix, index + 1, node.children[letter], );
    } else {
      return;
    }
  } else {
    if(node.isWord) {
      result.push(node.isWord);
    } else {
      for(let op in node.children) {
        dfs(prefix, index, node.children[op]);
      }
    }
  }
}

let prefix = 'goo';
console.log(findWords(prefix));