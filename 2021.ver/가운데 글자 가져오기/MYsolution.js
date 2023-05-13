function solution(s) {
    var answer = '';
    let result = [];
    if(s.length % 2 === 0){
        result.push( s[s.length / 2 - 1], s[s.length / 2])
    }
    if(s.length % 2 === 1){
        result.push(s[parseInt(s.length / 2)])
    }
    
    return result.join('');
}