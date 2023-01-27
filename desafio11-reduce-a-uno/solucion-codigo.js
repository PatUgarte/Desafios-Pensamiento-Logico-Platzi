function solution(num) {
    let count = 0
    let result = num
    while (result > 1) {
        if (result % 2 == 0) result /= 2
        else {
            const futureOddAddingOne = (result + 1) / 2 % 2
            const resultEqualThree = result == 3
            if (futureOddAddingOne || resultEqualThree) result--
            else result++
        }
        count++
    }
    console.log(count)
    return count
}

solution(0)         /* Devuelve 0 */
solution(1)         /* Devuelve 0 */
solution(3)         /* Devuelve 2 */
solution(6)         /* Devuelve 3 */
solution(11)        /* Devuelve 5 */
solution(13)        /* Devuelve 5 */
solution(15)        /* Devuelve 5 */
solution(328593)    /* Devuelve 23 */