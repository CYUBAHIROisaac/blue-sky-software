// Simple login functionality
const users = [
    { username: "", password: "password123" },
    { username: "user1", password: "mypassword" }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log("Login successful!");
        return true;
    } else {
        console.log("Invalid username or password.");
        return false;
    }
}

// Example usage
const usernameInput = "admin";
const passwordInput = "password123";

login(usernameInput, passwordInput);