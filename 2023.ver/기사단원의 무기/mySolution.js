function solution(number, limit, power) {
    let result = []
    let resultNum = 0;
    const cal = (num) => {
        let count = 0
        for(let i = 1; i <= Math.sqrt(num); i ++){
            if(num % i === 0){
                console.log(num)
                count ++;
                if (i !== num / i){
                    count ++
                }
            }
        }
        return count
    }
    
    for(let i = 1; i <= number; i ++){
        result.push(cal(i))
    }
    for(const elNum of result){
        if(elNum <= limit){
            resultNum += elNum
        } else {
            resultNum += power
        }
    }

        
    var answer = resultNum;
    return answer;
}