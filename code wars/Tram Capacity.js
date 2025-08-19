// Description:
// Linear Kingdom has exactly one tram line. It has n stops, numbered from 1 to n in the order of tram's movement. At the i-th stop ai passengers exit the tram, while bi passengers enter it. The tram is empty before it arrives at the first stop.

// Your task
// Calculate the tram's minimum capacity such that the number of people inside the tram never exceeds this capacity at any time. Note that at each stop all exiting passengers exit before any entering passenger enters the tram.

// Example

function tram(stops, descending, onboarding) {
  let current = 0;
  let maxCapacity = 0;

  for (let i = 0; i < stops; i++) {
    current -= descending[i];   
    current += onboarding[i];   
    maxCapacity = Math.max(maxCapacity, current);
  }

  return maxCapacity;
}