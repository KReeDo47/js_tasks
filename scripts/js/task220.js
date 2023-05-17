let obj = {
    year: 2025,
    month: 12,
    day: 31,
 };

let year, month, day; // объявим переменные заранее

// {year, month, day} = obj; // не будет работать

({year, month, day} = obj);