function solution(cards1, cards2, goal) {
    var answer = '';
    for(const index in goal){
        if(cards1.indexOf(goal[index]) !== -1 && cards1.indexOf(goal[index]) === 0){
            answer = 'Yes'
            cards1.splice(0,1)
        } 
        else if(cards2.indexOf(goal[index]) !== -1 && cards2.indexOf(goal[index]) === 0){
            answer = 'Yes'
            cards2.splice(0,1)
        }
        else{
            return 'No'
        }

    }
    
    return answer;
}