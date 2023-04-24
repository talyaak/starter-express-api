"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRsvp = exports.getRsvps = void 0;
const index_1 = require("../database/index");
const getRsvps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield index_1.pool.connect();
        const result = yield client.query('SELECT * FROM rsvps;');
        res.status(200).json(result.rows);
        client.release();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getRsvps = getRsvps;
const createRsvp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const client = yield index_1.pool.connect();
        const result = yield client.query(`INSERT INTO rsvps (name, email) VALUES ($1, $2) RETURNING *;`, [name, email]);
        res.status(201).json(result.rows[0]);
        client.release();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createRsvp = createRsvp;
