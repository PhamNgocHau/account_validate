function validateAccount(str) {
    var regexp = /^[_a-z0-9]{6,}$/;

    if ( regexp.test(str)){
        console.log('Account hop le!!');
    } else {
        console.log('Account khong hop le!!');
    }
}