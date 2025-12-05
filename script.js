function firstWord(s) {
	s = s.trim();

	
  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');

  // If no space found, return the whole string
  if (spaceIndex === -1) {
    return s;
  }

  // Return substring from start to first space
  return s.substring(0, spaceIndex);
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
