function solution(strings, n) {
    strings.sort();
    
    strings.sort((a, b) => {
        
    if(a[n] > b[n]) return 1;
        
    else if(a[n] < b[n]) return -1;
        
    else return 0;
        
    });
        
    let answer = strings;
        
    return answer;
    }