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

    // Check for empty input
    if (!userInput) {
        alert("Please input a value"); // Show alert for empty input
        return;
    }

    // Check if the input is a palindrome
    const palindromeCheck = isPalindrome(userInput);

    // Update the result div with the original input and formatted message
    resultDiv.textContent = palindromeCheck
        ? `${userInput} is a palindrome`
        : `${userInput} is not a palindrome`;
    resultDiv.style.color = palindromeCheck ? "green" : "red";

    // Ensure the result div is visible
    resultDiv.classList.remove("hidden");
});