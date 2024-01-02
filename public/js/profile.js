// JavaScript code for handling avatar selection
const profilePicButton = document.getElementById('profile-pic-button');
const avatarOptionsContainer = document.querySelector('.avatar-options');
const avatarOptions = document.querySelectorAll('.avatar-option');
const selectedAvatarInput = document.getElementById('selected-avatar');

profilePicButton.addEventListener('click', () => {
    avatarOptionsContainer.style.display = 'flex';
});

avatarOptions.forEach((avatar) => {
    avatar.addEventListener('click', () => {
        const selectedAvatar = avatar.getAttribute('data-avatar');
        profilePicButton.querySelector('.img').src = selectedAvatar;
        selectedAvatarInput.value = selectedAvatar;
        avatarOptionsContainer.style.display = 'none';
    });
});

// JavaScript (profile.js)

document.addEventListener("DOMContentLoaded", function() {
    const editButton = document.getElementById("edit-profile-button");
    const saveButton = document.getElementById("save-profile-button");
    const usernameDiv = document.querySelector(".name");
    const bioDiv = document.querySelector(".text span");

    // Store the original content for later comparison
    let originalUsername = usernameDiv.innerText;
    let originalBio = bioDiv.innerText;

    // Handle the "Edit" button click
    editButton.addEventListener("click", function() {
        // Make username and bio content editable
        usernameDiv.setAttribute("contenteditable", "true");
        bioDiv.setAttribute("contenteditable", "true");

        // Show the "Save" button
        saveButton.style.display = "block";

        // Store the original content
        originalUsername = usernameDiv.innerText;
        originalBio = bioDiv.innerText;
    });

    // Handle the "Save" button click
    saveButton.addEventListener("click", function() {
        // Save the edited content
        const editedUsername = usernameDiv.innerText;
        const editedBio = bioDiv.innerText;

        // You can save this data to a server or a storage mechanism, depending on your application.

        // Make username and bio content non-editable
        usernameDiv.removeAttribute("contenteditable");
        bioDiv.removeAttribute("contenteditable");

        // Hide the "Save" button
        saveButton.style.display = "none";

        // Update the original content for future comparison
        originalUsername = editedUsername;
        originalBio = editedBio;
    });
});
