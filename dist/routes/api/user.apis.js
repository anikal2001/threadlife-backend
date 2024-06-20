"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const user_controller_1 = require("../../api/controllers/user.controller");
const validation_helpers_1 = require("../../api/middleware/validation_helpers");
const router = express_1.default.Router();
const userController = new user_controller_1.UserController();
router.get('/', userController.getAllUsers);
router.post('/register', validation_helpers_1.validateUserFields, userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.put('/change-password/:id', userController.changePassword);
exports.default = router;