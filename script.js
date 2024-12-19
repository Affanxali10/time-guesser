function checkTime() {
    // Prompt user to input time in 24-hour format
    let userTime = prompt("Please enter the time in 24-hour format (HH:MM):", "14:30");

    // Check if the input format is valid
    if (userTime) {
        let timeParts = userTime.split(":");
        if (timeParts.length === 2) {
            let hours = parseInt(timeParts[0], 10);
            let minutes = parseInt(timeParts[1], 10);

            // Validate hours and minutes
            if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
                // Determine AM or PM
                if (hours < 12) {
                    alert("It's AM");
                } else {
                    alert("It's PM");
                }
            } else {
                alert("Invalid time! Please enter a valid time between 00:00 and 23:59.");
            }
        } else {
            alert("Invalid input! Please enter time in HH:MM format.");
        }
    }
}
