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
exports.getBitLink = void 0;
const getBitLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let redirectUrl;
    try {
        redirectUrl = process.env.BIT_LINK_URL;
        if (!redirectUrl || !redirectUrl.startsWith('https')) {
            throw new Error('REDIRECT_URL must start with https');
        }
        res.redirect(301, redirectUrl);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getBitLink = getBitLink;
