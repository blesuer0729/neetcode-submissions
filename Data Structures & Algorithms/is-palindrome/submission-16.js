class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphanumeric(char) {
            if (
                char >= 'a' && char <= 'z' ||
                char >= 'A' && char <= 'Z' ||
                char >= '0' && char <= '9'
            ) {
                return true;
            } else {
                return false;
            }
        }

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !isAlphanumeric(s[l])) {
                l++;
            }
            while (l < r && !isAlphanumeric(s[r])) {
                r--;
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            } else {
                console.log(l, s[l], r, s[r]);
                r--;
                l++;
            }
        }

        return true;
    }
}
