function solution(n) {

    let sum = n.toString().split('').map(el => Number(el))

    return sum.reverse();
}