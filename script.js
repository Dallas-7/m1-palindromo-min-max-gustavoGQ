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
    /* Seu código aqui */
}
