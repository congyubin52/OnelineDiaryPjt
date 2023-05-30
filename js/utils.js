let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const getCurrentDateTime = () => {
    console.log('getCurrentDateTime() CALLED!!');

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1; //0이 1월 1이 2월
    let date = today.getDate(); 
    let day = today.getDay(); //0이 일요일

    return `[${year}/${month}/${date}/${days[day]}] `;
}

const consoleFlag = true;
if (!consoleFlag) {
    console = {};
    console.log = function () {};
    console.worn = function () {};
    console.error = function () {};
}