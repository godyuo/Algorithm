function solution(a, b) {
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let start = 5;

    var answer = '';
    for(let i = 1; i < a; i ++){
        if(i !== a){
            if(i === 1 || i ===3 || i ===5 ||i === 7 || i === 8 || i === 10 || i === 12){
                start += 3;
            }
            
            if(i === 2){
             start += 1;
            }
            
            if(i === 4 || i === 6 || i === 9 || i === 11){
                start += 2;
            }
        }    
    }
    answer = day[(start + b - 1) % 7];
    return answer;
}