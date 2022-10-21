import express from "express";
declare const createWorkExperience: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateWorkExperience: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteWorkExperience: (req: express.Request, res: express.Response) => Promise<void>;
export { createWorkExperience, updateWorkExperience, deleteWorkExperience };
