class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        function mapFreqs (arr) {
            const output = new Map();

            arr.forEach((char) => {
                if (output.has(char)) {
                    output.set(char, output.get(char) + 1);
                } else {
                    output.set(char, 1);
                }
            });

            return output;
        };

        function compareFreqs (mapA, mapB) {
            let result = true;

            for (const [key, value] of mapA) {
                if (mapB.has(key) && mapB.get(key) === value) {
                    continue;
                } else {
                    result = false;
                }
            }

            return result;
        }

        const splitS = Array.from(s);
        const splitT = Array.from(t);

        const sFreq = mapFreqs(splitS);
        const tFreq = mapFreqs(splitT);

        const resultS = compareFreqs(sFreq, tFreq);
        const resultT = compareFreqs(tFreq, sFreq);

        console.log(resultS, resultT);

        return resultS && resultT;
    }
}
