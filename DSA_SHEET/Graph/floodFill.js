var floodFill = function (image, sr, sc, color) {
  if (image[sr][sj] == color) return image;
  let oldColor = image[sr][sc];
  dfs(image, sr, sc, color, oldColor);
  return image;
};

function dfs(image, sr, sc, newColor, oldColor) {
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc > image[0].length ||
    image[sr][sc] !== oldColor
  )
    return;

  image[sr][sc] = newColor;
  dfs(image, sr + 1, sc, newColor, oldColor);
  dfs(image, sr - 1, sc, newColor, oldColor);
  dfs(image, sr, sc + 1, newColor, oldColor);
  dfs(image, sr, sc - 1, newColor, oldColor);
}
