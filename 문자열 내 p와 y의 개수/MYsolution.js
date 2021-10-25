function solution(s){
    
    let sum = s.toLowerCase().split('');
    let p = sum.filter((el) => el === 'p');
    let y = sum.filter((el) => el === 'y');
    
    if(p.length === 0 && y.length === 0) { return true };
    return (p.length === y.length ? true : false)
    
}