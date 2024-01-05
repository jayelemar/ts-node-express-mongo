"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: ["http://localhost:5173", "https://example.com"],
    credentials: true
}));
app.get("/", (req, res) => {
    res.send("Home Page");
});
(0, connectDB_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
