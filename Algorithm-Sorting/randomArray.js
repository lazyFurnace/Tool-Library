function rendomArray(arrayNum) {

    let arr = [], rendomArr = [];

    const rendomNum = length => parseInt(Math.random() * length);

    for (let i = 0; i < arrayNum; i++) {
        arr.push(i);
    }
    
    for (let i = 0; i < arrayNum; i++) {
        const num = rendomNum(arr.length);
        rendomArr.push(arr[num]);
        arr[num] = arr[arr.length - 1];
        arr.length -= 1;
    }
    
    return rendomArr;
};

/**
 * Test
 */

console.time('Time Test');

rendomArray(100);

console.timeEnd('Time Test');
