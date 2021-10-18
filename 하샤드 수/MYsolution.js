function solution(x) {
    var answer = true;

    let change = String(x).split('')
    let cal = change.reduce((a, b) =>  Number(a) + Number(b), 0)
    if(x % cal === 0){
        return answer = true;
    }
    else{
        return answer = false;
    }
}