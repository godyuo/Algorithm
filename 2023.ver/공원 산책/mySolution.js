function solution(park, routes) {
    // 공원의 크기
    const rows = park.length;
    const cols = park[0].length;
  
    // 로봇 강아지의 초기 위치 찾기
    let startRow = -1;
    let startCol = -1;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (park[i][j] === 'S') {
          startRow = i;
          startCol = j;
          break;
        }
      }
      if (startRow !== -1) {
        break;
      }
    }
  
    // 로봇 강아지 이동 함수
    function move(direction, distance, currRow, currCol) {
      if (direction === 'N') {
        const newRow = currRow - distance;
        if (newRow < 0) {
          return [currRow, currCol];
        }
        for (let i = currRow - 1; i >= newRow; i--) {
          if (park[i][currCol] === 'X') {
            return [currRow, currCol];
          }
        }
        return [newRow, currCol];
      } else if (direction === 'S') {
        const newRow = currRow + distance;
        if (newRow >= rows) {
          return [currRow, currCol];
        }
        for (let i = currRow + 1; i <= newRow; i++) {
          if (park[i][currCol] === 'X') {
            return [currRow, currCol];
          }
        }
        return [newRow, currCol];
      } else if (direction === 'W') {
        const newCol = currCol - distance;
        if (newCol < 0) {
          return [currRow, currCol];
        }
        for (let j = currCol - 1; j >= newCol; j--) {
          if (park[currRow][j] === 'X') {
            return [currRow, currCol];
          }
        }
        return [currRow, newCol];
      } else if (direction === 'E') {
        const newCol = currCol + distance;
        if (newCol >= cols) {
          return [currRow, currCol];
        }
        for (let j = currCol + 1; j <= newCol; j++) {
          if (park[currRow][j] === 'X') {
            return [currRow, currCol];
          }
        }
        return [currRow, newCol];
      }
    }
  
    // 명령어 수행
    let currRow = startRow;
    let currCol = startCol;
    for (let i = 0; i < routes.length; i++) {
      const [direction, distance] = routes[i].split(' ');
      currRow = move(direction, parseInt(distance), currRow, currCol)[0];
      currCol = move(direction, parseInt(distance), currRow, currCol)[1];
    }
  
    return [currRow, currCol];
  }