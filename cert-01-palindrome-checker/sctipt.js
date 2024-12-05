// Get references to elements in the DOM
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function isPalindrome(input);
// Remove non-alphanumeric characters and convert to lowercase
  const cleanedInput = input.replace(/[^a-zA-Z0-9}]/g, "").toLowerCase();
// Compare the string with its reverse
  return cleanedInput === cleanedInput.split("").reverse().join("");
};

// Add Event listener for the Check button
checkButton.addEventListener("click", () => {
  const userInput = textInput.value.trim(); // Remove whitespace from input

// Clear previous results
    resultDiv.classList.add("hidden");
    resultDiv.textContent = "";
    
});