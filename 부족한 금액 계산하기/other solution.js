
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

// 가우스공식..!
// 1과 최대값을 더해서 총 개수의 절반을 곱해준다.