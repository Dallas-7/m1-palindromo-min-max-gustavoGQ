function isPalindrome(str){
    let normalizar = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    for (let i = 0; i < normalizar.length / 2; i++){
        if (normalizar[i] !== normalizar[normalizar.length -1 -i]){
            return false;
        }
    }
    return true
}

function arrayMaxMin(arr){
    let min = arr[0];

    let max = arr[0];
    for ( let i = 0 ; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }

        if (arr[i] > max) {
           max = arr[i]
        }
    }
    return [min, max]
}
