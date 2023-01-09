//your code here
 const inputField = document.getElementById("evaluatedText");
  const letterCountElement = document.getElementById("letterCount");

  // Set an event listener on the input field to update the letter count when the text changes
  inputField.addEventListener("input", function() {
    // Update the letter count
    letterCountElement.textContent = inputField.value.length;
  });