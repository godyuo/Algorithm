function solution(n) {
    var answer = 0;
    let sum = String(n).split('').sort((a, b) => b - a)
    answer = Number(sum.reduce((a, b) => a + b))
    
    return answer;
}