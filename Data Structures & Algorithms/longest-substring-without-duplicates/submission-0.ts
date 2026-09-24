class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let result = 0;
        let seen: Map<string, number> = new Map();
        let startI = 0;
        for (let endI = 0; endI < s.length; endI++) {
            const newChar = s[endI];
            if (!seen.has(newChar)) {
                seen.set(newChar, endI);
                const newLength = endI-startI+1;
                if (newLength > result) result = newLength;
            } else {
                const lastSeenAt = seen.get(newChar);
                while (startI <= lastSeenAt) {
                    if (seen.get(s[startI]) === startI) {
                        seen.delete(s[startI])
                    }
                    startI++
                }
                startI = lastSeenAt+1;
                seen.set(newChar,endI)
            }
        }

        return result;
    }
}
