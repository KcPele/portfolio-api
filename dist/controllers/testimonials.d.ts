import express from "express";
declare const createTestimonial: (req: express.Request, res: express.Response) => Promise<void>;
declare const updateTestiminial: (req: express.Request, res: express.Response) => Promise<void>;
declare const deleteTestimonial: (req: express.Request, res: express.Response) => Promise<void>;
export { createTestimonial, updateTestiminial, deleteTestimonial };
