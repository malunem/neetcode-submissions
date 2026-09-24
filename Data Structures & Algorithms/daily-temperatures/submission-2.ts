class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let results: number[] = new Array(temperatures.length).fill(0);

        const stack: number[] = [];

        for (let i = 0; i < temperatures.length; i++) {
            if (stack.length === 0) {
                stack.push(i);
                continue;
            }
            let last = stack.pop();
            while (temperatures[last] < temperatures[i]) {
                results[last] = i - last;
                last = stack.pop();
            }

            last !== undefined && stack.push(last);
            stack.push(i);
        }

        return results;
    }
}
