import express from "express";
declare const createExperience: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateExperience: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteExperience: (req: express.Request, res: express.Response) => Promise<void>;
export { createExperience, updateExperience, deleteExperience };
