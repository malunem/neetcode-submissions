/**
 * Definition of Interval:
//  */
//  class Interval  {

//     public start: number;
//     public end: number;

//    constructor(start, end) {
//      this.start = start;
//      this.end = end;
//    }
//  }


class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        let minRooms = 0;
        const starts = intervals.map(interval => interval.start).sort((a,b) => a-b)
        const ends = intervals.map(interval => interval.end).sort((a,b) => a-b)
        let startIndex = 0;
        let endIndex = 0;
        let inUse = 0;

        while (startIndex < starts.length) {
            if (starts[startIndex] < ends[endIndex]) {
                inUse++;
                startIndex++;
                if (inUse > minRooms) minRooms = inUse
            } else {
                inUse--
                endIndex++
            }
        }

        return minRooms;
    }
}
