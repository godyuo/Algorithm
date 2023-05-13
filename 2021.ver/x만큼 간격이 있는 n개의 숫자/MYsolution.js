function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n ; i ++){
        let number = x * i
        answer.push(number);
        
    }
    return answer;
}