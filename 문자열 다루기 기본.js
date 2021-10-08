/*
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
입출력 예
s	return
"a234"	false
"1234"	true
*/

// 내가 푼 풀이
function solution(s) {
    
    let a = s.split('');
    let sum = a.filter(el => isNaN(+el));
    let result = a.length - sum.length;
    
    return (result === 4 || result === 6) && (s.length === 4 || s.length === 6) ? true : false
}

// 다른 사람이 푼 풀이

function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }
  
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( alpha_string46("a234") );
  // 정규식