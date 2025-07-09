const fact = (n) => {
    let res = 1;
    if (n > 0) {
        for (i = 2; i <= n; i++) {
            res = res * i;
        }
        console.log(res);
    }

}

// fact(3);


const checkNgram = (s1, s2) => {
    if (s1.length != s2.length) {
        console.log("Not a Anagram");
        return;
    }

    str1 = s1.split('').sort().join();
    str2 = s2.split('').sort().join();

    if (str1 == str2) {
        console.log('hai bhai hai');
    }

}

// checkNgram('eenl' , 'neel')


const removeDuplicate = (arr) => {
    const arr1 = []
}

const diff = (arr) => {
    max = arr[0];
    min = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return max - min;
}

array = [1, 5, 9, 2, 12]
console.log(diff(array));