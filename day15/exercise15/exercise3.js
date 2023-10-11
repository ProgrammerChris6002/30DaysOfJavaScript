class Statistics
{
    constructor(array)
    {
        this.array = array.sort();
        this.arrayLength = this.array.length;
    }

    count()
    {
        return (this.array.length);
    }

    sum()
    {
        let sum = this.array.reduce((acc, cur) => acc + cur, 0);
        return (sum);
    }

    min()
    {
        return (this.array[0]);
    }

    max()
    {
        return (this.array[this.arrayLength - 1]);
    }

    range()
    {
        return (this.max() - this.min());
    }

    mean()
    {
        return (this.sum() / this.count());
    }

    median()
    {
        let median;
        let middleIndex;
        if (this.arrayLength % 2 === 0)
        {
            middleIndex = this.arrayLength / 2;
            median = (this.array[middleIndex - 1] + this.array[middleIndex]) / 2;
        }
        else
        {
            middleIndex = (this.arrayLength - 1) / 2;
            median = this.array[middleIndex];
        }
        return (median);
    }

    mode()
    {
        return (this.freqDist()[0]);
    }

    var()
    {
        let result;
        let sum = 0;
        this.array.forEach((num) =>
        {
            sum += (num - this.mean()) ** 2;
        });
        result = sum / this.count();
        return (Math.round(result * 10) / 10);
    }

    std()
    {
        return (Math.round(Math.sqrt(this.var()) * 10) / 10);
    }

    freqDist()
    {
        const result = [];
        const set = new Set(this.array);
        for (const element of set)
        {
            const filteredNum = this.array.filter((num) => num === element);
            result.push({ mode: element, count: filteredNum.length });
        }

        result.sort((a, b) => b.count - a.count);
        return (result);
    }
}

const ages = [ 31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26 ];
const statistics = new Statistics(ages);
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
