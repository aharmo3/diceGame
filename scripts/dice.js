$(function () {
    $('#throwDice').click(function () {
        throwdice();
    });
});

var point;
var firstturn = true;
function throwdice() {
    //jquery selectors
    var $Stage = $('#stage');
    var $outcome = $('#outcome');
    var $pointValue = $('#pv');

    var sum;
    //generate random number between 2-6
    var roll = Math.floor(Math.random() * 6) + 1;
    //Make that equal to sum
    sum = roll;
    //Pass # into function and adjust background position
    drawface(roll, '#dieLeft');
    //Generate new random number
    roll = Math.floor(Math.random() * 6) + 1;
    //Add that onto sum var
    sum += roll;
    //Draw right die
    drawface(roll, '#dieRight');

    if (firstturn) {
        //This area holds the logic for the first turn. If outcome is not a 7,11,2,3,or 12 or store sum into point variable and return false for first turn variable
        if (sum === 7 || sum === 11) {

            $outcome.val('You win!!');

        } else if (sum === 2 || sum === 3 || sum === 12) {

            $outcome.val('You Lose!!!');
        } else {
            point = sum;
            $pointValue.val(point);
            firstturn = false;
            $Stage.val('Need follow-up throw.');
            $outcome.val('  ');
        }
    }
        //When user clicks again check to see if the more
    else {
        if (sum === point) {
            $Stage.val('You win!');
            $outcome.val('Back to first throw.');
            $pointValue.val(" ");
            firstturn = true;
        } else if (sum === 7) {
            $Stage.val('Back to first throw.');
            $outcome.val('You lose!');
            $pointValue.val(" ");
            firstturn = true;

        }

    };//End throwdice
    function drawface(n, id) {
        var position;
        switch (n) {
            case 1:
                position = "left center"
                break;
            case 2:
                position = "-107px center"
                break;
            case 3:
                position = "-215px center"
                break;
            case 4:
                position = "-322px center"
                break;
            case 5:
                position = "-429px center"
                break;
            case 6:
                position = "-536px center"
                break;
        }
        $(id).css("background-position", position);
    }
}