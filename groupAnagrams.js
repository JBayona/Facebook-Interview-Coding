/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.

https://leetcode.com/problems/group-anagrams/description/
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    var result = [];
    strs.forEach((word, index) => {
        let sortWord = sortedWord(word);
        if(sortWord in map){
            map[sortWord].push(word);
        }else{
            map[sortWord] = [word];
        }
    });
    //console.log(map);
    //Format output
    for(let prop in map){
        result.push(map[prop]);
    }
    return result;
};

const sortedWord = word => word.split('').sort().join('');

array = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(array));