class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let results: number[] = new Array(temperatures.length).fill(0);

        const stack: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            let last = stack.pop();
            
            if (last === undefined) {
                stack.push(i);
                continue;
            }

            while (temperatures[last] < temperatures[i]) {
                results[last] = i - last;
                last = stack.pop();
            }

            stack.push(last);
            stack.push(i);
        }

        return results;
    }
}
