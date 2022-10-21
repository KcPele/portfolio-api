import express from "express";
declare const createProfile: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateProfile: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteProfile: (req: express.Request, res: express.Response) => Promise<void>;
export { createProfile, updateProfile, deleteProfile };
