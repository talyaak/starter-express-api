"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rsvp_controller_1 = require("../controllers/rsvp.controller");
const router = express_1.default.Router();
router.get('/', rsvp_controller_1.getRsvps);
router.post('/', rsvp_controller_1.createRsvp);
exports.default = router;
