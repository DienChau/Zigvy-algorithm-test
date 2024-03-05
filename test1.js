function firstDuplicate(a) {
    const seen = new Set();
    for (let num of a) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1;
}

// const a = [2, 1, 3, 5, 3, 2];
// const a = [5, 5];
const a = [2, 4, 3, 5, 1];

console.log(firstDuplicate(a));
