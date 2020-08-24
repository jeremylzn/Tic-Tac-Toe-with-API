$(document).ready(function() {

    var gameBoard = ['', '', '', '', '', '', '', '', ''];
    var moveCounter = 0;
    var gameStatus = 'In Progress'

    $('.square').one('click', gameClick);
    $('.newGame h2').on('click', newGame);
    $('#O').one('click', playerO);

    function playerTurn(count) {
        return count % 2 === 0 ? 'X' : 'O'
    }

    function addToBoard(index) {
        return gameBoard[index] = playerTurn(moveCounter);
    }

    function computerMove() {
        $.ajax({
            type: "POST",
            url: '/api/move',
            data: { board: JSON.stringify(gameBoard) },
            dataType: 'json',
            success: function(obj) {
                var index = obj.nextMove;
                addToBoard(index);
                $('#' + index.toString()).find('h2').text(playerTurn(moveCounter));
                $('#' + index.toString()).unbind('click');
                moveCounter++;
                isWinner();
            },
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }
        });
    }

    function isWinner() {
        $.ajax({
            type: "POST",
            url: '/api/isWinner',
            data: { board: JSON.stringify(gameBoard) },
            dataType: 'json',
            success: function(obj) {
                gameStatus = obj.isWinner;
                if (gameStatus !== 'In Progress') {
                    $('.outcome h2').text(gameStatus);
                }
            },
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }
        });
    }

    function newGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        moveCounter = 0;
        gameStatus = 'In Progress';
        $('.square').unbind('click').one('click', gameClick);
        $('#O').unbind('click').one('click', playerO);
        $('.square h2').empty();
        $('.outcome h2').empty();
        $('#X').css({ 'background-color': 'goldenrod' });
        $('#O').css({ 'background-color': 'beige' });
        return 'new game';
    }

    function gameClick(event) {
        var square = $(event.currentTarget);
        var index = square.attr('id');
        if (gameStatus === 'In Progress') {
            $('#' + index).find('h2').text(playerTurn(moveCounter));
            addToBoard(parseInt(index));
            moveCounter++;
            $.ajax({
                type: "POST",
                url: '/api/isWinner',
                data: { board: JSON.stringify(gameBoard) },
                dataType: 'json',
                success: function(obj) {
                    gameStatus = obj.isWinner;
                    if (gameStatus !== 'In Progress') {
                        $('.outcome h2').text(gameStatus);
                    } else {
                        computerMove();
                    }
                },
                error: function(xhr, status, err) {
                    console.error(status, err.toString());
                }
            });
            if (moveCounter > 0) {
                $('#O').off('click', playerO);
            }
        }
    }

    function playerO(event) {
        $('#X').css({ 'background-color': 'beige' });
        $('#O').css({ 'background-color': 'goldenrod' });
        computerMove();
    }

});