"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calendar_1 = __importDefault(require("./calendar"));
exports.default = {
    lunar2solar: calendar_1.default.lunar2solar,
    solar2lunar: calendar_1.default.solar2lunar,
    isLeapYear: calendar_1.default.isLeapYear,
    getYearCN: calendar_1.default.getYearCN,
    lunarYearDays: calendar_1.default.lunarYearDays,
    getConstellation: calendar_1.default.getConstellation,
    getAllFestival: calendar_1.default.getAllFestival, // 输入阳历年份，获取所有节日，节日列表见festival中
};
