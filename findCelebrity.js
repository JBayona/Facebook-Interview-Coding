/*
In a party of N people, only one person is known to everyone. Such a person may be present in the party, if yes, (s)he doesn’t know anyone in the party. We can only ask questions like “does A know B? “. Find the stranger (celebrity) in minimum number of questions.

We can describe the problem input as an array of numbers/characters representing persons in the party. We also have a hypothetical function HaveAcquaintance(A, B) which returns true if A knows B, false otherwise. How can we solve the problem.


If A knows B, then A can’t be celebrity. Discard A, and B may be celebrity.
If A doesn’t know B, then B can’t be celebrity. Discard B, and A may be celebrity.
Repeat above two steps till we left with only one person.
Ensure the remained person is celebrity. (Why do we need this step?)

https://www.geeksforgeeks.org/the-celebrity-problem/
*/

// Returns -1 if celebrity  
// is not present. If present, 
// returns id (value from 0 to n-1). 
var findCelebrity = function(n) {
  let stack = [];

  // Push everybody into the stack
  for(let i = 0; i < n; i++) {
    stack.push(i);
  }

  while(stack.length > 1) {
    let person1 = stack.pop();
    let person2 = stack.pop();

    if(knows(person1, person2)) {
      stack.push(person2);
    } else {
      stack.push(person1);
    }
  }

  console.log(stack)

  // At this point this is our candidate to be the celebrity as it´s the only one in the stack
  let celebrity = stack.pop();

  // Verify if it´s a celebrity as all should know him.
  for(let i = 0; i < n; i++) {
    if(i !== celebrity && knows(celebrity,i) && !knows(i, celebrity)) {
      return -1; // There´s no celebrity
    }
  }

  return celebrity;

};

// Returns true if a knows  
// b, false otherwise 
function knows(a, b) { 
    return PERSON[a][b] == 1 ? true : false; 
}

// Person with 2 is celebrity 
PERSON = [ 
  [0, 0, 1, 0 ], 
  [0, 0, 1, 0 ], 
  [0, 0, 0, 0 ],  
  [0, 0, 1, 0 ]
];

n = 4;
console.log(findCelebrity(n));
