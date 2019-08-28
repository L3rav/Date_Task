const randomDate = (fromDate, toDate, count) => {

    const dayName = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const monthName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(new Date(fromDate.getTime() + Math.random() * (toDate.getTime() - fromDate.getTime())));
    }

    arr.forEach(date => {
        let today = new Date(date);
        let weekDay = today.getDay();
        let month = today.getMonth();
        let day = today.getDate();
        let year = today.getFullYear();

        console.log(`${dayName[weekDay]}, ${year} ${monthName[month]}, ${day}`);
    })
}
console.time('Calling Time');
randomDate(new Date(2018, 0, 1), new Date(2019, 2, 23), 3);
console.timeEnd('Calling Time');