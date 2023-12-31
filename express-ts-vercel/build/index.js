"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = require("./routers/posts");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Log requests
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
// Router
app.use("/api/posts", posts_1.postsRouter);
app.listen(PORT, () => console.log(`⚡Server is running on port ${PORT}⚡`));
