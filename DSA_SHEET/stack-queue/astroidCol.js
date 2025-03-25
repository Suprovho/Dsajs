var asteroidCollision = function (asteroids) {
  let st = [];
  let n = asteroids.length;
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && st[st.length - 1] > 0 && asteroids[i] < 0) {
      let top = st[st.length - 1];
      if (Math.abs(top) < Math.abs(asteroids[i])) {
        st.pop();
        continue;
      } else if (Math.abs(top) == Math.abs(asteroids[i])) {
        st.pop();
      }
      asteroids[i] = 0;
    }
    if (asteroids[i] !== 0) {
      st.push(asteroids[i]);
    }
  }
  return st;
};

let ast = [8, -8];
console.log(asteroidCollision(ast));
