import express from "express";
declare const createAbout: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateAbout: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteAbout: (req: express.Request, res: express.Response) => Promise<void>;
export { createAbout, updateAbout, deleteAbout };
