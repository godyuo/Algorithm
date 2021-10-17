function solution(s) {
    var answer = '';
    let sum = s.split(' ')
    
    for(let i = 0; i < sum.length; i ++){
        for(let j = 0; j < sum[i].length; j ++){
            if(sum[i].slice(0, j).length % 2 === 0) { answer += sum[i][j].toUpperCase() }
            if(sum[i].slice(0, j).length % 2 === 1) { answer += sum[i][j].toLowerCase() }
        }
        answer += ' '
    };
    
    return answer.substr(0, answer.length - 1);
}