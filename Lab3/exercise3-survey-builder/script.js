const questions = [
    { text: "Your Name", type: "text", required: true },
    { text: "Gender", type: "radio", options: ["Male", "Female"], required: true },
    { text: "Skills", type: "checkbox", options: ["HTML", "CSS", "JS"], required: true }
];
const form = document.getElementById("surveyForm");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    const label = document.createElement("label");
    label.textContent = q.text;
    div.appendChild(label);
    div.appendChild(document.createElement("br"));

    if (q.type === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "q" + index;
        div.appendChild(input);
    }

    if (q.type === "radio") {
        q.options.forEach(opt => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "q" + index;
            input.value = opt;
            div.appendChild(input);
            div.appendChild(document.createTextNode(opt));
        });
    }

    if (q.type === "checkbox") {
        q.options.forEach(opt => {
            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = "q" + index;
            input.value = opt;
            div.appendChild(input);
            div.appendChild(document.createTextNode(opt));
        });
    }

    const error = document.createElement("div");
    error.className = "error";
    error.id = "error" + index;
    div.appendChild(error);

    form.appendChild(div);
});
function submitSurvey() {
    let valid = true;

    questions.forEach((q, index) => {
        const error = document.getElementById("error" + index);
        error.textContent = "";

        if (q.type === "text") {
            const value = document.getElementById("q" + index).value;
            if (q.required && value === "") {
                error.textContent = "This field is required";
                valid = false;
            }
        }

        if (q.type === "radio") {
            const checked = document.querySelector(`input[name="q${index}"]:checked`);
            if (q.required && !checked) {
                error.textContent = "Please select an option";
                valid = false;
            }
        }

        if (q.type === "checkbox") {
            const checked = document.querySelectorAll(`input[name="q${index}"]:checked`);
            if (q.required && checked.length === 0) {
                error.textContent = "Select at least one option";
                valid = false;
            }
        }
    });

    if (valid) {
        alert("Survey submitted successfully");
    }
}
