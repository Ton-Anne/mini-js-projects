const pills = [
{
name = 'Aplha',
formula = 'abc',
description = 'energy',
duration = 60,
badCombination = 'Q10',
},
{
name = 'Q10',
formula = 'xyz',
description = 'energy',
duration = 60,
badCombination = 'Alpha',
},
{
name = '5HTP',
formula = 'srg',
description = 'energy, euphoria',
duration = 240,
badCombination = 'multi-vitamin',
},
{
name = 'multi-vitamin',
formula = 'ghjk',
description = 'energy, euphoria',
duration = 240,
badCombination = 'Q10',
}
]

const FindPairs = (pills) => {
    let mostFrequent = 1;
    let count = 0;
    let pairs;
    for (let i = 0; i < pills.length; i++) {
        for (var j = i; j < pills.length; j++) {
            if (pills[i] === pills[j]) {
                count++;
            }
        }
        if (mostFrequent < count) {
            mostFrequent = count;
            pairs = pills[i];
        }
        count = 0;
    }
    return pairs;
};