function solution(numbers) {
    var answer = [];
    let result = [];
    numbers.sort((a, b) => a - b)
    
    let add = (copysum, rounds, arr) => {
    if(rounds === 0){
      answer.push(arr[0] + arr[1]);
      return;
    }
    for(let i = 0; i < copysum.length; i ++){
      let temporary = copysum[i];
      let copy = copysum.slice();
      copy.splice(i, 1)

      add(copy, rounds - 1, arr.concat(temporary))
    }
  }
  add(numbers, 2, []);
    
  answer.sort((a,b) => a - b)
  for(let i = 1 ; i <= answer.length; i ++){
      if(answer[i - 1] !== answer[i]){
          result.push(answer[i - 1])
      }
  }
    return result;
}

// 순열사용후 중복된 값 제거.