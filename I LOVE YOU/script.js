document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const revealButton = document.getElementById('reveal-button');
    const messageContainer = document.getElementById('message-container');
    const surpriseMessage = document.getElementById('surprise-message');
    const signature = document.querySelector('.signature');

    // Add click event listener to the button
    revealButton.addEventListener('click', function() {
        // 1. Start the fade-out of the initial message
        messageContainer.classList.add('fade-out');

        // 2. After the fade-out is complete (1 second transition in CSS)
        setTimeout(() => {
            // Hide the initial message container completely
            messageContainer.classList.add('hidden');
            
            // Show the surprise message container
            surpriseMessage.classList.remove('hidden');
            
            // Apply fade-in class to the surprise message
            surpriseMessage.classList.add('fade-in');
            
            // Move signature below the surprise message
            signature.style.marginTop = '20px';

        }, 1000); // 1000 milliseconds = 1 second
    });
});