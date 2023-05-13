function solution(s, n) {
    var answer = '';
    let al = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
              't','u','v','w','x','y','z']
    let sum = [];
    
    function upper(number, n){
        let cal = al.indexOf(number.toLowerCase());
        if(cal + n > 25){
            sum.push(al[cal + n - 26].toUpperCase())
        }
        else{
            sum.push(al[cal + n].toUpperCase())
        }
    }
    for(let i = 0; i < s.length; i ++){
        let cal = al.indexOf(s[i]);
        if(s[i] === ' '){
            sum.push(' ')
        }
        if(cal + n > 25 && s[i] !== ' '){
                sum.push(al[cal + n - 26])
        }
        if(cal === -1 && s[i] !== ' '){
            upper(s[i], n)
        }
        if(cal + n <= 25 && s[i] !== ' ' && cal !== -1){
            sum.push(al[cal + n])
        }
    }
    return sum.join('');
}