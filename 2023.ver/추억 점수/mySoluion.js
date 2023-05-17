function solution(name, yearning, photo) {
    // name: 그리워하는 사람의 이름을 담은 문자열 배열
    // yearning: 각 사람별 그리움 점수를 담은 정수 배열
    // photo: 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열
    let object = {}
    for(let i = 0 ; i < name.length; i ++){
        object[name[i]] = yearning[i]
    }
    const resultArray = photo.map(el => {
        let result = 0
        for(const nameIndex in el){
            if(object[el[nameIndex]] !== undefined){
                result += object[el[nameIndex]]
            }
        }
        return result
    })
    var answer = resultArray;
    return answer;
}