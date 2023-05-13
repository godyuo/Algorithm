function getDayName(a,b){
    var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if(a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
    return dayList[daySum % 7];
}