function solution(n, m, section) {
    let count = 0;
    const arr = Array.from(Array(n+1).fill(null));

    section.forEach(el =>{
        arr[el] = 1;
    })
    section.forEach(el=>{
        if(arr[el]){
            arr.fill(null, el, el+m)
            count++
        }
        
    })
    return count
}