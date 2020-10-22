export const getFormattedDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return yyyy.toString().substr(2,2) + '-' + mm + '-' + dd;
}

// Takes in number n=0.6 and returns s=0.6000
export const convertTo4DP = (n) => {

}