function solution(a, b) {
    var answer = 0;
    if(a === b){
        return a
    }
    if(a > b){
        for(let i = b; i <= a; i ++){
            answer += i;
        }
    }
    if(b > a){
        for(let i = a; i <= b; i ++){
            answer += i;
        }
    }
    
    return answer;
}