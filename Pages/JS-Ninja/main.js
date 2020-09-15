const scores = [10, 20, 50, 30, 90, 5, 25]

const filteredScores = scores.filter((score) => {
    return score > 20;
})

console.log(filteredScores)