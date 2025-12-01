document.addEventListener('DOMContentLoaded', function() {
    // Set the birthday date (tomorrow)
    const now = new Date();
    const birthdayDate = new Date();
    birthdayDate.setDate(now.getDate() + 1);
    birthdayDate.setHours(0, 0, 0, 0); // Set to midnight

    // Update countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").style.display = "none";
            document.getElementById("birthday-message").classList.remove("hidden");
            
            // Add confetti effect
            startConfetti();
        }
    }, 1000);

    // Simple confetti effect
    function startConfetti() {
        const colors = ['#ec4899', '#a855f7', '#6366f1', '#3b82f6', '#10b981'];
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.zIndex = '1000';
                confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
                document.body.appendChild(confetti);

                const animationDuration = Math.random() * 3 + 2;
                confetti.style.transition = `top ${animationDuration}s linear, transform ${animationDuration}s linear`;

                setTimeout(() => {
                    confetti.style.top = '100vh';
                    confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
                }, 10);

                setTimeout(() => {
                    confetti.remove();
                }, animationDuration * 1000);
            }, Math.random() * 3000);
        }
    }
});
