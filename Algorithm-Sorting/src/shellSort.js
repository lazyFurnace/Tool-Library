function shellSort(arr) {
    let len = arr.length;
    let gap = 1;
    while (gap < len / 3) {
        gap = 3 * gap + 1;
    }
    while (gap >= 1) {
        for (let i = gap; i < len; i++) {
            for (let j = i; j >= gap; j -= gap) {
                if (arr[j] < arr[j - gap]) {
                    swap(arr, j, j - gap);
                } else {
                    break;
                }
            }
        }
        gap = (gap - 1) / 3;
    }
    return arr;
}
function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

module.exports = shellSort;
