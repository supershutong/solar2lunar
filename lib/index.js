"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __importDefault(require("./src"));
exports.default = {
    lunar2solar: src_1.default.lunar2solar,
    solar2lunar: src_1.default.solar2lunar,
    isLeapYear: src_1.default.isLeapYear,
    getYearCN: src_1.default.getYearCN,
    lunarYearDays: src_1.default.lunarYearDays,
    getConstellation: src_1.default.getConstellation,
    getAllFestival: src_1.default.getAllFestival, // 输入阳历年份，获取所有节日，节日列表见festival中
};
