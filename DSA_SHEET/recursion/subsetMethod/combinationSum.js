function combsum(index, arr, target, result, current) {
  if (index === arr.length) {
    if (target == 0) {
      result.push([...current]);
    }
    return;
  }

  if (arr[index] <= target) {
    combsum(index, arr, target - arr[index], result, [...current, arr[index]]);
  }
  combsum(index + 1, arr, target, result, current);
}
