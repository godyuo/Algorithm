function solution(n, m, section) { 

    let start = section[0]
    let count = 0
    let lastStart = 0

    
 const findStart = (number) => {
     for(let i = lastStart ; i < section.length; i ++){
         if(number <= section[i]){
             lastStart = i
             start = section [i]
             return ;
         }
     }
 }
 while(start <= section[section.length - 1]){
     start = start + m
     findStart(start)
     
     count ++;
 }
 
 var answer = count;
 return answer;
}