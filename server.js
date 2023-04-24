"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const rsvp_routes_1 = __importDefault(require("./routes/rsvp.routes"));
const app = (0, express_1.default)();
const publicDirPath = path_1.default.join(__dirname, 'public');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/rsvps', rsvp_routes_1.default);
// Serve the index.html file for the root path
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.use(express_1.default.static(publicDirPath));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
