function solution(num) {
    var answer = 0;
    let count = 0;
    while(count < 500){
    if(num === 1){
        return count;
    }
    if(num % 2 === 1) { num = num * 3 + 1 }
    else{ num = num / 2};
        count ++;
    }
    return -1;
}