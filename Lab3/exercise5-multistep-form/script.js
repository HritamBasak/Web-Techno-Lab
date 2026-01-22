let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");

showStep();

function showStep() {
    steps.forEach(step => step.classList.remove("active"));
    steps[currentStep].classList.add("active");
    progress.textContent = `Step ${currentStep + 1} of 4`;
}

function nextStep() {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        alert("Form submitted successfully");
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
}

function validateStep() {
    const input = steps[currentStep].querySelector("input");

    if (input.value === "") {
        alert("Please fill the field before continuing");
        return false;
    }
    return true;
}
