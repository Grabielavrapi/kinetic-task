function goToNextStep(step) {
    // Hide current step
    const current = document.getElementById('step' + step);
    if (current) {
        current.style.display = 'none';
    }

    // Show next step
    const next = step + 1;
    const nextSection = document.getElementById('step' + next);
    if (nextSection) {
        nextSection.style.display = 'block';
    }

    // Populate summary on step 3
    if (next === 3) {
        const fields = ['time', 'firstName', 'lastName', 'email', 'phone'];
        fields.forEach(field => {
            const input = document.getElementById(field);
            const display = document.getElementById('display-' + field);
            if (input && display) {
                display.textContent = input.value || 'Not provided';
            }
        });
    }
}