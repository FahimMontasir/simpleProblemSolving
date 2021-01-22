// https://github.com/FahimMontasir/simpleProblemSolving




// 1.calculating kilometer to meter
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





// 2.budget calculator
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






// 3.calculating hotel cost
function hotelCost(day) {
    if (day <= 10) {
        var totalCost = day * 100;
    }
    else if (day <= 20) {
        var first10DaysCost = 10 * 100;
        var remainingDay = day - 10;
        var discountedCost = remainingDay * 80;
        totalCost = first10DaysCost + discountedCost;
    }
    else if (day > 20) {
        first10DaysCost = 10 * 100;
        var second10DaysCost = 10 * 80;
        remainingDay = day - 20;
        discountedCost = remainingDay * 50;
        totalCost = first10DaysCost + second10DaysCost + discountedCost;
    }

    //to tackle unexpected value
    if (typeof day == "string") {
        return "put numbers only";
    }
    else if (day < 0) {
        return "put positive numbers only";
    }

    return totalCost; //will provide total hotel cost
}






// 4.recognizing the name of mega friend
function megaFriend(friendsArray) {

    //to tackle unexpected value
    if (typeof friendsArray == "string" || typeof friendsArray == "number" || friendsArray.length == 0) {
        return "provide an array with all of your friends name";
    }

    //main functionality
    else {
        var largeLength = friendsArray[0].length;
        var largeName = friendsArray[0];

        for (var i = 0; i < friendsArray.length; i++) {
            var letterCount = friendsArray[i].length;

            if (letterCount > largeLength) {
                largeLength = letterCount;
                largeName = friendsArray[i];
            }

        }
    }

    return largeName; //will provide large name 
}


