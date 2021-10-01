// 나의풀이
function solution(lottos, win_nums) {
    var answer = [];
    let sum = [];
    let min = [];

    const truely = ((lo) => {
        if(lo === 2) {answer.push(5)};
        if(lo === 3) {answer.push(4)};
        if(lo === 4) {answer.push(3)};
        if(lo === 5) {answer.push(2)};
        if(lo === 6) {answer.push(1)};
        if(lo < 2) {answer.push(6)};
    }) 

    for(let i = 0; i < lottos.length; i ++){
        if(lottos[i] === 0){
                sum.push(lottos[i])
            }
        for(let n = 0; n < win_nums.length; n ++){

            if(lottos[i] === win_nums[n]){
                sum.push(lottos[i])
                min.push(lottos[i])
            }
        }
    }
       truely(sum.length);
        truely(min.length)

    return answer;
}

// good coding 다른사람 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

// 다른사람이 푼정답 중 !0가 True인점을 이용하여 필터링함.
// 보기좋은 코드