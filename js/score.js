/**
 * Numbers of decimal digits to round to
 */
const scale = 2;

/**
 * Calculate the score awarded when having a certain percentage on a list level
 * @param {Number} rank Position on the list
 * @param {Number} percent Percentage of completion
 * @param {Number} minPercent Minimum percentage required
 * @returns {Number}
 */
export function score(rank, percent, minPercent) {
    if (rank > 150) {
        return 0;
    }
    if (rank > 75 && percent < 100) {
        return 0;
    }

    const customPoints = [
        50.00, 46.88, 43.96, 41.22, 38.65,
        36.24, 33.98, 31.86, 29.87, 28.01,
        26.27, 24.63, 23.09, 21.65, 20.30,
        19.04, 17.85, 16.74, 15.69, 14.71,
        13.80, 12.94, 12.13, 11.37, 10.66,
        10.00
    ];

    let baseScore = rank <= customPoints.length
        ? customPoints[rank - 1]
        : Math.max(1, round(10 * Math.pow(0.9375, rank - 26)));

    let score = baseScore *
        ((percent - (minPercent - 1)) / (100 - (minPercent - 1)));

    score = Math.max(0, score);

    if (percent != 100) {
        return round(score - score / 3);
    }

    return Math.max(round(score), 0);
}

export function round(num) {
    if (!('' + num).includes('e')) {
        return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    } else {
        var arr = ('' + num).split('e');
        var sig = '';
        if (+arr[1] + scale > 0) {
            sig = '+';
        }
        return +(
            Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
            'e-' +
            scale
        );
    }
}
