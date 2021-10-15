function solution(n)
{
    let answer = String(n).split('').reduce((a, b) => Number(a) + Number(b), 0)
     return answer;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 
}