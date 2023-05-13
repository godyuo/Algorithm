function solution(n) {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

// repeat = 문자열을 반복합니다.
// str.repeat(count) 내가푼거에비해 걸리는시간이 매우적음.