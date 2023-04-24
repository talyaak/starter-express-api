"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bit_controller_1 = require("../controllers/bit.controller");
const router = express_1.default.Router();
router.get('/', bit_controller_1.getBitLink);
exports.default = router;
