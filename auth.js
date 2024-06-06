// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Reference the sign-up form by its ID
const signUpForm = document.getElementById('signUpForm');

// Add event listener for form submission
signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get user input from the form
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

    try {
        // Create user with Firebase Authentication
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Store additional user information in Firestore
        await db.collection('users').doc(user.uid).set({
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Redirect to HomePage
        window.location.href = 'HomePage.html';
    } catch (error) {
        console.error('Error signing up:', error);
        alert('Sign Up failed: ' + error.message);
    }
});
