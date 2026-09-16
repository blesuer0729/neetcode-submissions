class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        matrix.reverse();

        console.log(matrix);
        
        for (let column = 0; column < matrix.length; column++) {
            for (let row = column; row < matrix[column].length; row++) {
                [matrix[column][row], matrix[row][column]] = [matrix[row][column], matrix[column][row]];
            }
        }
    }
}
