function solution(price, money, count) {
    var answer = -1;
    let c = 1;
    let sum = 0;
    while(count >= c){
        sum += price * c
        c ++;
    }
    answer = sum - money
    return (Math.sign(answer) === 1 ? sum - money : 0);
}