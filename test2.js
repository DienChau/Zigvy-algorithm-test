function calculateRanking(n, P, Q) {
    const hashMap = new Map();

    for (let i = 0; i < n; i++) {
        if (!hashMap.has(Q[i])) {
            hashMap.set(Q[i], []);
        }
        hashMap.get(Q[i]).push(P[i]);
    }

    const sortedEntries = [...hashMap.entries()].sort((a, b) => b[0] - a[0]);

    let ranking = [];
    let rank = 1;
    for (const [score, names] of sortedEntries) {
        for (const name of names) {
            ranking.push(`${name} ${rank}`);
        }
        rank += names.length;
    }

    return ranking;
}

const n = 5; // – the number of participants

const P = ["Lan", "Linh", "Lam", "Luyen", "Ly"]; // – list of participant names

const Q = [5, 5, 5, 1, 2, 1]; // – list of participant scores

const result = calculateRanking(n, P, Q);
console.log(result);
