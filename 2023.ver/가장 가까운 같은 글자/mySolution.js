function solution(s) {
    let resultArray = []
    let object = {}
    for(const index in s){
        
        if(object[s[index]] === undefined){
            resultArray[index] = -1
            object[s[index]] = index
        } else {
            const findIndex = s.indexOf(s[index], Number(object[s[index]]) + 1)
            resultArray[index] = findIndex - Number(object[s[index]])
            object[s[index]] = findIndex
        }
    }
    var answer = resultArray;
    return answer;
}