function solution(n) {
    var answer = '';
    if(n % 2 === 0){
        for(let i = 0; i < n/2; i ++){
            answer += '수박';
        }
    }
    if(n % 2 === 1){
        for(let i = 0; i < Math.floor(n); i ++){
            if(answer.length % 2 === 0){
                answer += '수'
            }
            else{
                answer += '박'
            }
        }
    }
    return answer;
}