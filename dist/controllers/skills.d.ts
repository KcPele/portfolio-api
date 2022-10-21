import express from "express";
declare const createSkills: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateSkills: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteSkills: (req: express.Request, res: express.Response) => Promise<void>;
export { createSkills, updateSkills, deleteSkills };
