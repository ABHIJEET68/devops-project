document.addEventListener("DOMContentLoaded", () => {
    const actionButton = document.getElementById("actionButton");
    const btnText = document.getElementById("btnText");
    const messageBox = document.getElementById("message");

    actionButton.addEventListener("click", () => {
        // Step 1: Simulate processing state
        actionButton.disabled = true;
        btnText.textContent = "Deploying Pipeline...";

        // Hide message if it was already showing
        messageBox.classList.remove("visible");

        // Step 2: Simulate a delay (e.g., waiting for the pipeline)
        setTimeout(() => {
            // Revert button state
            actionButton.disabled = false;
            btnText.textContent = "Trigger Pipeline";

            // Show success message
            messageBox.classList.remove("hidden");
            messageBox.innerHTML = `
                <span style="margin-right: 8px;">✅</span> 
                Pipeline successfully triggered!
            `;

            // Trigger CSS transition
            setTimeout(() => {
                messageBox.classList.add("visible");
            }, 10);

        }, 2000); // 2-second simulated delay
    });
});