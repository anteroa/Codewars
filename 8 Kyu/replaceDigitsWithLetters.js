/**Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake. */

//solution
function correct(string)
{
	// organize the corrections in a human-readable object/map
  const corrections = {
    "5": "S",
    "0": "O",
    "1": "I",
  };

  return (
    string
      // split the string into an array of characters
      .split("")
      // check if the current character is in the corrections object
      // if it is, correct it, else return it unchanged
      .map((char) =>
        corrections.hasOwnProperty(char) ? corrections[char] : char
      )
      // join the array of characters to a string
      .join("")
  );
}

