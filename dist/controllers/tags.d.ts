import express from "express";
declare const createTag: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateTag: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteTag: (req: express.Request, res: express.Response) => Promise<void>;
export { createTag, updateTag, deleteTag };
