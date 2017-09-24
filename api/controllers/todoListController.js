'use strict';

exports.get_rooms = function(req, res) {
    const skip = req.query.skip;
    const limit = req.query.limit;
    const name = req.query.name;
    console.log(req.query);
    res.json({
        data: [
            {id: 0, name: "room 1", players: 1},
            {id: 1, name: "room 2", players: 0},
            {id: 2, name: "room 3", players: 2}
        ],
        meta: {
            count: 3
        },
        message: "rooms",
        errors: []
    });
};

exports.create_room = function(req, res) {
    res.json({
        message: "Room created"
    });
};

const empty = 0;
const rookB = 1;
const knightB = 2;
const bishopB = 3;
const queenB = 4;
const kingB = 5;
const pawnB = 6;
const rookW = 11;
const knightW = 12;
const bishopW = 13;
const queenW = 14;
const kingW = 15;
const pawnW = 16;

function createNewBoard() {
    return [
        [rookB,knightB,bishopB,queenB,kingB,bishopB,knightB,rookB],
        [pawnB,pawnB,pawnB,pawnB,pawnB,pawnB,pawnB,pawnB],
        [empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty],
        [empty,empty,empty,empty,empty,empty,empty,empty],
        [pawnW,pawnW,pawnW,pawnW,pawnW,pawnW,pawnW,pawnW],
        [rookW,knightW,bishopW,queenW,kingW,bishopW,knightW,rookW]
    ]
}

exports.join_room = function(req, res) {
    res.json({
        data: [{
            board: createNewBoard()
        }],
        message:"Room joined!"
    });
}

exports.read_a_task = function(req, res) {

};

exports.update_a_task = function(req, res) {

};

exports.delete_a_task = function(req, res) {
};