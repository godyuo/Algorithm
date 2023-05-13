function solution(answers) {
    var answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let a = [];
    let b = [];
    let c = [];
    let array1 = [];
    let array2 = [];
    let array3 = [];
    
    array1.fill(0, 0, answers.length - 1);
    array2.fill(0, 0, answers.length - 1);
    array3.fill(0, 0, answers.length - 1);
    
    for(let i = 0; i < answers.length; i ++){
        a.push(one[i % 5]);
        b.push(two[i % 8]);
        c.push(three[i % 10]);
    }
    
    for(let i = 0; i < answers.length; i ++){
        if(a[i] === answers[i]){
            array1[i] = 1;
        }
        if(b[i] === answers[i]){
            array2[i] = 1;
        }
        if(c[i] === answers[i]){
            array3[i] = 1;
        }
    }
    
    let filter1 = array1.filter(el => el === 1);
    let filter2 = array2.filter(el => el === 1);
    let filter3 = array3.filter(el => el === 1);
    answer = filter1.length;
    if(filter2.length === filter3.length){
        if(filter1.length === filter2.length){
            answer = [1,2,3];
        }
        if(filter1.length > filter2.length){
            answer = [1];
        }
        if(filter1.length < filter2.length){
            answer = [2,3];
        }
    }
    if(filter2.length > filter3.length){
        if(filter1.length === filter2.length){
            answer = [1,2];
        }
        if(filter1.length > filter2.length){
            answer = [1];
        }
        if(filter1.length < filter2.length){
            answer = [2];
        }
    }
    if(filter2.length < filter3.length){
        if(filter1.length === filter3.length){
            answer = [1,3];
        }
        if(filter1.length > filter3.length){
            answer = [1];
        }
        if(filter1.length < filter3.length){
            answer = [3];
        }
    }
    
    return answer;
}