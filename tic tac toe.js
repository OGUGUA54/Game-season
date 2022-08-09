window.addEventListener("DOMContentLoaded", () => {
    const tiles = array.form(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
}

    let board = ['', '', '', '', '', '', '', '', '',]);  
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = "PLAYERX_WON";
    const PLAYERO_WON = "PLAYERO_WON";
    const TIE = "TIE";

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function handleResultValidation() {
        let roundown = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[2]];
            const c = board[winCondition[3]];
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            announce(currentPlayer === 'x' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
            announce(TIE);
    }

    const announce = (type) => {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class= "PlayerO">O</span> Won'
                break;
            case TIE:
                announcer.innerText = 'TIE';
        }
        announcer.classList.remove('hide');
    };


    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'x' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const isValidAction = (title) => {
        if (title.innerText === 'X' || title.innerText === 'O') {
            return false;
        }
    }

        const userAction = (tile, index) => {
            if (isValidAction) (tile) && isGameActive(); {
                tile.innerText = currentPlayer;
                tile.classList.add(`player${currentPlayer}`);
                updateBoard(index);
                handleResultValidation();
                changePlayer();
            }
        }

      const resetBoard = () => {
        board = ['','','','','','','','','',];
        isGameActive = true;
        announcer.classList.add('hide');
        if(currentPlayer === 'O'){
            changePlayer();
        }
    }

        tiles.forEach(title=> {
            tile.innerText =  '';   
            title.classList.remove('playerX')
            title.classList.remove('playerO')


        tiles.forEach((tiles, index) => {
            tile.addEventListener('click', () => userAction(tile, index));
        });

        resetButton.addEventListener('click', resetBoard)
    });
