class FilterForm {
    constructor(arrayDate){
        this.arrayDate = arrayDate
    }

    getFilterFromDate(){
        console.log(this.arrayDate);
                 const order = this.arrayDate.sort((a,b) => {
                     return a > b ? 1 : -1
               })
    }
}



