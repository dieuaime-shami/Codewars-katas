// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. 
// Different races will certainly be involved. Each race has a certain worth when battling against others. 
// On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and
// compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of 
// , determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. 
// Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, 
// or "Battle Result: No victor on this battle field" if it ends in a tie.

// solution: 

function goodVsEvil(good, evil){
 const goodWorth=[1,2,3,3,4,10];
 const evilWorth=[1,2,2,2,3,5,10];
  
  goodNumber=good.split(" ").map(Number);
  evilNumber=evil.split(" ").map(Number);
  
  goodTotal=goodNumber.reduce((acc,carr,i)=> acc+carr * goodWorth[i]);
  evilTotal=evilNumber.reduce((acc,carr,i)=> acc+carr * evilWorth[i])
  


  if (goodTotal > evilTotal) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilTotal > goodTotal) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
