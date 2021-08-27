const arr = [1,8, 6, 3, 7, 8, 5];

const swap = (a, left, right) => {
  [a[left], a[right]] = [a[right], a[left]];
};

const partition = (a, left, right) => {
  const privot = a[right];
  const privotPos = right;
  right = right - 1;
  while (true) {
    while (left <= right && a[left] < privot) left++;
    while (right >= left && a[right] > privot) right--;
    if (left > right) break;
    swap(a, left, right);
    left++;
    right--;
  }
  swap(a, left, privotPos);
  return left;
};

const quickSort = (a, left, right) => {
  if (left < right) {
    const privot = partition(a, left, right);
    quickSort(a, left, privot - 1);
    quickSort(a, privot + 1, right);
  }
};
quickSort(arr, 0, arr.length - 1);
console.log(arr);
