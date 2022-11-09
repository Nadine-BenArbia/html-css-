var max = 1;
var index = 0;
var previndex = 0;
var before = 0;
var after = 0;
var suit = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1];
for (let i = 0; i < suit.length; i++) {
  if (suit[i] == 0) {
    if (max < before + after) {
      index = previndex;
      max = before + after;
    }
    before = after;
    after = 0;
    previndex = i;
  } else {
    after++;
  }
}
console.log(index);
