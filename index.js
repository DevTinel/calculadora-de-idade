const button = document.querySelector("button");
button.addEventListener("click", calculate);
function calculateYear() {
    const spanDay = document.querySelector("#days-calc");
    const spanMonth = document.querySelector("#months-calc");
    const spanYear = document.querySelector("#year-calc");

    const yearInput = document.querySelector("#year");
    const year = +yearInput.value;
    if (year && typeof year == "number") {
        if (year < 1903) {
            yearInput.classList.add(`error`);
            document.querySelector(".label-year").classList.add("error-label");
            document.querySelector(".none").innerText =
                "must be in the present";
            document.querySelector(".none").classList.add("error-input");
            spanDay.innerText = `-- `;
            spanMonth.innerText = `-- `;
            spanYear.innerText = `-- `;
        } else if (year > 2023) {
            spanDay.innerText = `-- `;
            spanMonth.innerText = `-- `;
            spanYear.innerText = `-- `;
            yearInput.classList.add(`error`);
            document.querySelector(".label-year").classList.add("error-label");
            document.querySelector(".none").innerText = "must be in the past";
            document.querySelector(".none").classList.add("error-input");
        } else {
            yearInput.classList.remove(`error`);
            document
                .querySelector(".label-year")
                .classList.remove("error-label");
            document.querySelector(".none").classList.remove("error-input");
            const acctualyYear = new Date().getFullYear();
            const age = acctualyYear - year;

            document.querySelector("#year-calc").innerText = age + " ";
            yearInput.classList.remove(`error`);
            document
                .querySelector(".label-year")
                .classList.remove("error-label");
            document.querySelector(".none").classList.remove("error-input");
            document.querySelector(".none").innerText = "";
            return age;
        }
    } else {
        spanDay.innerText = `- - `;
        spanMonth.innerText = `- - `;
        spanYear.innerText = `- - `;
        yearInput.classList.add(`error`);
        document.querySelector(".label-year").classList.add("error-label");
        document.querySelector(".none").classList.add("error-input");
        document.querySelector(".none").innerText = "this fild is required";
        return;
    }
}

function calculateMonth() {
    const spanDay = document.querySelector("#days-calc");
    const spanMonth = document.querySelector("#months-calc");
    const spanYear = document.querySelector("#year-calc");
    const spanErrorMonth = document.querySelector(".month-container span");
    const monthInput = document.querySelector("#month");
    const month = +monthInput.value;
    if (month && typeof month == "number") {
        if (month) {
            if (month > 12 || month <= 0) {
                spanDay.innerText = `- - `;
                spanYear.innerText = `- - `;
                spanMonth.innerText = `- - `;
                spanErrorMonth.innerText = "Must a be valid month";
                monthInput.classList.add("error");
                document
                    .querySelector(".label-month")
                    .classList.add("error-label");
            } else {
                spanErrorMonth.innerText = "";

                monthInput.classList.remove("error");
                document
                    .querySelector(".label-month")
                    .classList.remove("error-label");
                const calculateMonth = calculateYear() * 12;
                document.querySelector("#months-calc").innerText =
                    calculateMonth + month + " ";
                return calculateMonth;
            }
        }
    } else {
        spanDay.innerText = `- - `;
        spanMonth.innerText = `- - `;
        spanYear.innerText = `- - `;
        monthInput.classList.add("error");
        document.querySelector(".label-month").classList.add("error-label");
        spanErrorMonth.innerText = "this fild is required";
    }
}

function calculateDays() {
    const spanDay = document.querySelector("#days-calc");

    const dayInput = document.querySelector("#day");
    const spanErrorDay = document.querySelector(".day-container span");
    const inputDay = document.querySelector("#day");
    const day = parseInt(inputDay.value);
    const month = document.querySelector("#month").value;
    if (month > 12 || (month < 1 && day)) {
        spanDay.innerText = "- - ";
    }

    if (day && typeof day == "number") {
        if (typeof day === "string") {
            spanDay.innerText = `- - `;
            document.querySelector(".label-day").classList.add("error-label");
            dayInput.classList.add("error");
            spanErrorDay.innerText = "Must a be valid day";
        }
        if (day <= 0 || day > 31) {
            spanDay.innerText = `- - `;
            document.querySelector(".label-day").classList.add("error-label");
            dayInput.classList.add("error");
            spanErrorDay.innerText = "Must a be valid day";
        } else {
            if (month == 01 && day > 28) {
                document
                    .querySelector(".label-day")
                    .classList.add("error-label");
                dayInput.classList.add("error");
                spanErrorDay.innerText = "Must a be valid day";
                spanDay.innerText = `- - `;
            } else {
                document
                    .querySelector(".label-day")
                    .classList.remove("error-label");
                dayInput.classList.remove("error");
                spanErrorDay.innerText = "";
                const calc = calculateMonth() * 365 + day;
                spanDay.innerText = calc + " ";
            }
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                if (day == 31) {
                    document
                        .querySelector(".label-day")
                        .classList.add("error-label");
                    dayInput.classList.add("error");
                    spanErrorDay.innerText = "Must a be valid day";
                    spanDay.innerText = `- - `;
                } else {
                    document
                        .querySelector(".label-day")
                        .classList.remove("error-label");
                    dayInput.classList.remove("error");
                    spanErrorDay.innerText = "";
                }
            }
        }
    } else {
        document.querySelector(".label-day").classList.add("error-label");
        dayInput.classList.add("error");
        spanErrorDay.innerText = "This field is required";
        spanDay.innerText = `- - `;
    }
}

function calculate(e) {
    e.preventDefault();
    calculateDays();
    calculateMonth();
    calculateYear();
}
