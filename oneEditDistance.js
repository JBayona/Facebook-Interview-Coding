/*
Given two strings S and T, determine if they are both one edit distance apart.
*/

//O(N)

function onEditDistance(s1,s2) {
    let len1 = s1.length;
    let len2 = s2.length;
  
    let len = Math.min(len1,len2);
  
    for(let i = 0; i < len; i++) {
        // Check only those who are different
        if(s1[i] !== s2[i]) {
            // Replace case, delete the diff char in both string
            if(len1 === len2) {
                return s1.substring(i+1) === s2.substring(i+1);
            } else if(len1 < len2) { // Delete one char from s2
                return s1.substring(i) === s2.substring(i+1);
            } else { // Delete one char from s1
                return s1.substring(i+1) === s2.substring(i);
            }
        }
    }
  
  return Math.abs(len1 - len2) === 1; // Corner case: ""
  
}

s1 = "ab";
s2 = "aa";

console.log(onEditDistance(s1,s2));

// Opt2
// O(N)

function onEditDistance(s1,s2) {
    let len1 = s1.length;
    let len2 = s2.length;
  
    // If the difference between both is greater than 1
    // it's not possible to get the string
    if(Math.abs(len1 - len2) > 1) {
        return false;
    }
  
    let i = 0;
    let j = 0;
    let count = 0;
  
    while(i < len1 && j < len2) {
        if(s1[i] === s2[j]) {
            i++;
            j++;
        } else { // If the're different
            count++;
            if(count > 1) {
                return false;
            }
            if(len1 > len2) { // increase variable that controls s1 (delete char from s1)
                i++;
            } else if(len1 < len2) { // increase variable that conttrols s2 (delete char from s2)
                j++;
            } else { // both has the same length, so we just need to advance (replace)
                i++;
                j++;
            }
        }
    }
  
  // If we have not analyzed part of some our of strings
  if(i < len1 || j < len2) {
    count++;
  }
  
  return count <= 1;
  
}

s1 = "ad";
s2 = "a";

console.log(onEditDistance(s1,s2));
