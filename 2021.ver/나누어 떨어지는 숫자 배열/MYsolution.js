function solution(arr, divisor) {
    var answer = [];
    arr.sort((a, b) => a - b)
    answer = arr.filter(el => el % divisor === 0)
    if(answer.length === 0){
        return [-1];
    }

    return answer;
}