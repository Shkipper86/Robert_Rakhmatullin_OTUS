const arr = [['a', 'b'], ['a', 'c'], ['d', 'e']];
let guid = []; 
let arrVal = []; 
let temp = [];
function maxItemAssociation() {
        for (let i = 0; i < arr.length-1; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                for (let k = i + 1; k < arr.length; k++) {
                    if (arr[k].indexOf(arr[i][j]) > -1) {
                        if (guid.length > arr[i].length) {
                            arrVal = arrVal.concat(arr[i], arr[k]);
                            if (arrVal.length > guid.length) {
                                guid = arrVal;
                                arrVal = [];
                            } else if (arrVal.length < guid.length) {
                                arrVal = [];                           
                            } else if ((arrVal.length < 1) && (guid.length < 1)) {
                                guid = arr[i];
                            }else {                               
                                temp.push(guid,arrVal);                                
                                temp.sort();
                                guid = temp[0];  
                            }
                        } else {
                            guid = guid.concat(arr[i], arr[k]);
                        }
                    } 
                }
            }
    }
    guid.sort();
    for (let l = 0; l < guid.length; l++) {
        if (guid[l] == guid[l++]) {
            guid.splice(l, 1);
        }
    }    
    console.log(guid);
}
maxItemAssociation(arr);
