// https://github.com/FahimMontasir/simpleProblemSolving

//calculating kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;

    //to tackle unexpected value
    if (typeof kilometer == "string") {
        return "put numbers only";
    }
    else if (kilometer < 0) {
        return "put positive numbers only";
    }

    return meter; //will provide meter
}
var result = kilometerToMeter(-1)
console.log(result)

// budget calculator
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;

    //to tackle unexpected value
    if (typeof watch == "string" || typeof mobile == "string" || typeof laptop == "string") {
        return "put numbers only";
    }
    else if (watch < 0 || mobile < 0 || laptop < 0) {
        return "put positive numbers only";
    }

    return totalPrice; //will provide total budget
}
console.log(budgetCalculator(2, 2, 2));
