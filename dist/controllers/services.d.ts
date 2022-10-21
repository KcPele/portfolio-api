import express from "express";
declare const createService: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateService: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteService: (req: express.Request, res: express.Response) => Promise<void>;
export { createService, updateService, deleteService };
