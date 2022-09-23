const getSleepHours = (day) => {
    switch (day) {
        case "Monday":
            return 8;
            break;
        case "Tuesday":
            return 8;
            break;
        case "Wednesday":
            return 8;
            break;
        case "Thursday":
            return 8;
            break;
        case "friday":
            return 8;
            break;
        case "Saturday":
            return 12;
            break;
        case "Sunday":
            return 12;
            break;
    }
};
const getActualSleepHours = () =>
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
};
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours > idealSleepHours) {
        console.log("You got more sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You should get some rest.");
    } else {
        console.log("You got the perfect amount of sleep.");
    }
};
calculateSleepDebt();