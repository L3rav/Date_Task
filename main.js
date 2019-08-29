const randomDate = (fromDate, toDate, count) => {

    fromDate = new Date(fromDate);
    toDate = new Date(toDate);
    let dates = [];
    for (let i = 0; i < count; i++) {
        dates.push(new Date(fromDate.getTime() + Math.random() * (toDate - fromDate))); // używam pętli i dodaje do tablicy losowe daty z zakresu jaki podaliśmy od-do ich ilość określa count
    }
    return dates; // zwracam tablicę z losowymi datami
};

const dayName = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
const monthName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

randomDate('2019-02-03', '2018-02-10', 3).forEach(date => { // wykonuje forEcha na każdym elemencie tablicy i pobieram odpowiednio dzień, miesiąc itd
    let weekDay = date.getDay();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    console.log(`${dayName[weekDay]}, ${year} ${monthName[month]}, ${day}`); // używam template stringa do wyświetlenia oczekiwanego formatu dat
})








// const randomDate = (fromDate, toDate, count) => {

//     const dayName = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
//     const monthName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

//     let arr = [];
//     for (let i = 0; i < count; i++) {
//         arr.push(new Date(fromDate.getTime() + Math.random() * (toDate.getTime() - fromDate.getTime())));
//     }

//     arr.forEach(date => {
//         let today = new Date(date);
//         let weekDay = today.getDay();
//         let month = today.getMonth();
//         let day = today.getDate();
//         let year = today.getFullYear();

//         console.log(`${dayName[weekDay]}, ${year} ${monthName[month]}, ${day}`);
//     })
// }
// console.time('Calling Time');
// randomDate(new Date(2018, 0, 1), new Date(2019, 2, 23), 3);
// console.timeEnd('Calling Time');





























// const dayName = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
// const monthName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

// const randomDate = (fromDate, toDate, count) => {


//     // fromDate = new Date(fromDate);
//     // toDate = new Date(toDate);
//     const randomDates = generateRandom() => {
//         // let randomDates = [];
//         for (let i = 0; i < count; i++) {
//             dates.push(new Date(fromDate.getTime() + Math.random() * (toDate.getTime() - fromDate.getTime())));
//         }
//         return [randomDates];
//     };


//     randomDates.forEach( => {
//         let today = new Date(date);
//         let weekDay = today.getDay();
//         let month = today.getMonth();
//         let day = today.getDate();
//         let year = today.getFullYear();


//         console.log(`${dayName[weekDay]}, ${year}, ${monthName[month]}, ${day}`);
//     });
// }

// randomDate(new Date(2018, 0, 1), new Date(2019, 2, 23), 3);
// console.timeEnd('Calling Time');