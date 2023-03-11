let arr = [10, 20, 30, 40, 21, 32, 51];

for (let i of arr) {
    if (String(i)[0] == '1' || String(i)[0] == '2') {
            console.log(i);
    } else {
            continue;
    };
};