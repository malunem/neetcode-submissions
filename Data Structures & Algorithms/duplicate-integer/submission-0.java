class Solution {
    public boolean hasDuplicate(int[] nums) {
        Map<Integer, Boolean> seen = new HashMap();
        for (int num : nums) {
            if (seen.containsKey(num)) {
                return true;
            } else {
                seen.put(num, true);
            }
        }
        return false;
    }
}