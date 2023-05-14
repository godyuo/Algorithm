function solution(participant, completion) {
    participant.sort();
    completion.sort();
  
    let answer = [];
  
    for (let i = 0; i < participant.length; i++) {
      if (participant[i] !== completion[i]) {
        answer.push(participant[i]);
      }
    }
  
    return answer[0];
  }