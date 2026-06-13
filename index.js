const firstSpring = document.getElementById("gamification");
const secondSpring = document.getElementById("computerVision");
const thirdSpring = document.getElementById("invope");
const fourthSpring = document.getElementById("smartCity");

const scheduleForGamification = document.getElementById("timeLineGamification");
const scheduleForComputerVision = document.getElementById("timeLineComputerVision");
const scheduleForInvope = document.getElementById("timeLineInvope");
const scheduleForSmartCity = document.getElementById("timeLineSmartCity");

scheduleForComputerVision.style.display = "none";
scheduleForInvope.style.display = "none";
scheduleForSmartCity.style.display = "none";

const gamificationButton = document.getElementById("firstButton");
const computerVisionButton = document.getElementById("secondButton");
const invopeButton = document.getElementById("thirdButton");
const smartCityButton = document.getElementById("fourthButton");

    gamificationButton.addEventListener("click", (e) => {
        e.preventDefault();
        changeScrum("gamification");
    });

    computerVisionButton.addEventListener("click", (e) => {
        e.preventDefault();
        changeScrum("computerVision");
    });

    invopeButton.addEventListener("click", (e) => {
        e.preventDefault();
        changeScrum("invope");
    });

    smartCityButton.addEventListener("click", (e) => {
        e.preventDefault();
        changeScrum("smartCity");
    });

secondSpring.style.display = "none";
thirdSpring.style.display = "none";
fourthSpring.style.display = "none";

let springs = document.getElementsByClassName("scrum");
    
    function changeScrum(amongSections) {

        switch(amongSections) {
            case "gamification" :
                
                firstSpring.style.display = "flex";
                secondSpring.style.display = "none";
                thirdSpring.style.display = "none";
                fourthSpring.style.display = "none";
                scheduleForGamification.style.display = "block";    
                scheduleForComputerVision.style.display = "none";
                scheduleForInvope.style.display = "none";
                scheduleForSmartCity.style.display = "none";    
            break;

            case "computerVision" :

                firstSpring.style.display = "none";
                secondSpring.style.display = "flex";
                thirdSpring.style.display = "none";
                fourthSpring.style.display = "none";
                scheduleForGamification.style.display = "none";    
                scheduleForComputerVision.style.display = "block";
                scheduleForInvope.style.display = "none";
                scheduleForSmartCity.style.display = "none";
            break;

            case "invope" :

                firstSpring.style.display = "none";
                secondSpring.style.display = "none";
                thirdSpring.style.display = "flex";
                fourthSpring.style.display = "none";
                scheduleForGamification.style.display = "none";    
                scheduleForComputerVision.style.display = "none";
                scheduleForInvope.style.display = "block";
                scheduleForSmartCity.style.display = "none";
            break;

            case "smartCity" :

                firstSpring.style.display = "none";
                secondSpring.style.display = "none";
                thirdSpring.style.display = "none";
                fourthSpring.style.display = "flex";
                scheduleForGamification.style.display = "none";    
                scheduleForComputerVision.style.display = "none";
                scheduleForInvope.style.display = "none";
                scheduleForSmartCity.style.display = "block";
            break;
        };
    };

const checks = document.getElementsByClassName("h5_title");

for(let check of checks) {

    check.addEventListener("click", () => {
        
        if(check.textContent.startsWith("☐")) {
            check.textContent = check.textContent.replace("☐", "☑");    
            check.style.textDecoration = "2px line-through";    
        } else {
            check.textContent = check.textContent.replace("☑", "☐");
            check.style.textDecoration = "none";
        };

    });
};

const deadLine = new Date("2026-06-17T20:00:00Z");

function getTimeLeft() {
    const now = new Date();
    const difference = deadLine - now;

    if (difference <= 0)
    
    return "EXPIRED";

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function uptadeGlobalClocks() {
    const value = getTimeLeft();

    document.querySelectorAll(".globalClockBox").forEach(el => {
        el.textContent = value;
    });

};

setInterval(uptadeGlobalClocks, 1000);
uptadeGlobalClocks();

function calculateSprintHours(timeLineId, clockBoxId) {
    
    const timeLine = document.getElementById(timeLineId);
    const times = timeLine.querySelectorAll("time");

    let totalHours = 0;

    times.forEach(time => {
        const hours = parseInt(time.textContent);
        totalHours += hours;
    });

    document.getElementById(clockBoxId).textContent = `${totalHours} horas`;
};

calculateSprintHours("timeLineGamification", "clockBox1");
calculateSprintHours("timeLineComputerVision", "clockBox2");
calculateSprintHours("timeLineInvope", "clockBox3");
calculateSprintHours("timeLineSmartCity", "clockBox4");