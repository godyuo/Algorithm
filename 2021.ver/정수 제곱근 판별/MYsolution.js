function solution(n) {
    var answer = 0;
    let number = Math.sqrt(n)
    return (Number.isInteger(Math.sqrt(n)) ? (number + 1) ** 2 : -1);
}