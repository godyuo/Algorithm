function solution(t, p) {

    let splitString = []
    
    for(let i = 0; i < t.length; i ++){
        if(t.substr(i,p.length).length === p.length){
            splitString.push(t.substr(i,p.length))
        }
    }
    
    
    var answer = splitString.filter(el => Number(el) <= Number(p)).length;
    return answer;
}