// Get references to elements in the DOM
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Function to check if a string is a palindrome
function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Compare the string with its reverse
    return cleanedInput === cleanedInput.split("").reverse().join("");
}

// Event listener for the "Check" button
checkButton.addEventListener("click", () => {
    const userInput = textInput.value.trim(); // Remove excess whitespace

    // Clear previous results
    resultDiv.classList.add("hidden");
    resultDiv.textContent = "";

    if (!userInput) {
        // Handle empty input
        resultDiv.textContent = "Please enter some text to check.";
        resultDiv.style.color = "red";
        resultDiv.classList.remove("hidden");
        return;
    }

    // Check if the input is a palindrome
    const palindromeCheck = isPalindrome(userInput);

    // Update the result div
    resultDiv.textContent = palindromeCheck
        ? `"${userInput}" is a palindrome!`
        : `"${userInput}" is not a palindrome.`;
    resultDiv.style.color = palindromeCheck ? "green" : "red";
    resultDiv.classList.remove("hidden");
});