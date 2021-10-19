function solution(n) {
    var answer = 0;
    let sum = [2];

    for(let i = 3; i <= n; i += 2){
        let a = true;
        let cal = Math.floor(Math.sqrt(i))
        for(let j = 2; j <= cal; j ++){
            if(i % j === 0){
                a = false;
            break;
            }
        }
        if(a){
            sum.push(i)
        }
    }
    console.log(sum)
    answer = sum.length;
    return answer;
}