module.exports = function toReadable (num) {
    let arrZeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrTenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrTenToNinety = ['not a number', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrNum = num.toString().split('');
    let i;
    if (arrNum.length == 3) {
        if (arrNum[1] == 0 && arrNum[2] == 0) {
            arrNum.length = 1;
        }
        else if (arrNum[1] == 1) {
            for (i = 0; i <= 9; i++) {
                if (arrNum[2] == i) {
                    arrNum[1] = arrTenToNineteen[i];
                    arrNum.length = 2;
                    break;
                };
            };
        }
        else if (arrNum[2] == 0) {
            for (i = 0; i <= 9; i++) {
                if (arrNum[1] == i) {
                    arrNum[1] = arrTenToNinety[i];
                    arrNum.length = 2;
                    break;
                };
            };
        }
        else if (arrNum[1] == 0) {
            for (i = 0; i <= 9; i++) {
                if (arrNum[2] == i) {
                    arrNum[1] = arrZeroToNine[i];
                    arrNum.length = 2;
                    break;
                };
            };
        }
        for (i = 0; i <= 9; i++) {
            if (arrNum[1] == i) {
                arrNum[1] = arrTenToNinety[i];
            };
            if (arrNum[2] == i) {
                arrNum[2] = arrZeroToNine[i];
            };
        };
        for (i = 1; i <= 9; i++) {
            if (arrNum[0] == i) {
                arrNum.unshift(arrZeroToNine[i]);
                arrNum[1] = "hundred";
                break;
            };
        };
    }
    else if (arrNum.length == 2) {
        if (arrNum[1] == 0) {
            for (i = 1; i <= 9; i++) {
                if (arrNum[0] == i) {
                    arrNum[0] = arrTenToNinety[i];
                    arrNum.length = 1;
                    break;
                };
            };
        }
        else if (arrNum[0] == 1) {
            for (i = 1; i <= 9; i++) {
                if (arrNum[1] == i) {
                    arrNum[0] = arrTenToNineteen[i];
                    arrNum.length = 1;
                    break;
                };
            };
        }
        for (i = 1; i <= 9; i++) {
            if (arrNum[0] == i) {
                arrNum[0] = arrTenToNinety[i];
            };
            if (arrNum[1] == i) {
                arrNum[1] = arrZeroToNine[i];
            };
        };
    }
    for (i = 0; i <= 9; i++) {
        if (arrNum[0] == i) {
            arrNum[0] = arrZeroToNine[i];
        };
    };
    num = arrNum.join(' ');
    return num;
}
