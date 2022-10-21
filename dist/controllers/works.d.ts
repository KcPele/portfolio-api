import express from "express";
declare const createWork: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateWork: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteWork: (req: express.Request, res: express.Response) => Promise<void>;
export { createWork, updateWork, deleteWork };
