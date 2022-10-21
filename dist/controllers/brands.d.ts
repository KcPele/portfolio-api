import express from "express";
declare const createBrand: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateBrand: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteBrand: (req: express.Request, res: express.Response) => Promise<void>;
export { createBrand, updateBrand, deleteBrand };
