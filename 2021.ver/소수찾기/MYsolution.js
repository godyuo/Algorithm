function solution(n) {
    //     처음 푼것
    //     var answer = 0;
    //     let sum = [2];
        
        
    //     for(let i = 3; i <= n; i += 2){
    //         sum.push(i)
    //     }
        
    //     function add(array) {
    //         if(Math.pow(array[0], 2) >= n){
    //             answer = array.length
    //             return;
    //         }
    //         else{
    //             let result = [];
    //             result = array.filter(el => el % array[0] !== 0)
    //             result.push(array[0])
    //             add(result)
    //         }
    //     }
    //     add(sum)
    //     return answer
    // }
        var answer = 0;
        let arr = [];
    
        
        for(let i = 2; i <= n; i ++){
             arr[i] = i
         }
        for(let i = 2; i <= n; i ++){
            if( arr[i] === 0 ){ continue; }
            
            for(let j = i + i; j <= n; j += i){
                if(arr[j] === 0){ continue; }
                else { arr[j] = 0 }
            }
        }
        answer = arr.filter((el) => el !== 0)
        return answer.length
    }