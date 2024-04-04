document.getElementById('myProfileBtn').addEventListener('click', function() {
    window.location.href = '';
});

document.getElementById('medicalHistoryBtn').addEventListener('click', function() {
    window.location.href = 'patient-medical.html';
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'logout.html';
});

//form submission

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const healthCondition = document.getElementById('healthCondition').value;
    const doctorNotes = document.getElementById('doctorNotes').value;

    // Perform validation if needed (e.g., check if required fields are filled)

    // Example: Save data to localStorage
    const profileData = {
        fullName,
        email,
        dob,
        gender,
        healthCondition,
        doctorNotes
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));

    // Show success message or perform other actions
    alert('Profile data saved successfully!');
});



document.getElementById('updateProfileBtn').addEventListener('click', function() {
    // Get updated form input values
    const updatedFullName = document.getElementById('fullName').value;
    const updatedEmail = document.getElementById('email').value;
    const updatedDob = document.getElementById('dob').value;
    const updatedGender = document.getElementById('gender').value;
    const updatedHealthCondition = document.getElementById('healthCondition').value;
    const updatedDoctorNotes = document.getElementById('doctorNotes').value;

    // Perform validation if needed (e.g., check if required fields are filled)

    // Example: Update data in localStorage
    const updatedProfileData = {
        fullName: updatedFullName,
        email: updatedEmail,
        dob: updatedDob,
        gender: updatedGender,
        healthCondition: updatedHealthCondition,
        doctorNotes: updatedDoctorNotes
    };
    localStorage.setItem('profileData', JSON.stringify(updatedProfileData));

    // Show success message or perform other actions
    alert('Profile data updated successfully!');
});
