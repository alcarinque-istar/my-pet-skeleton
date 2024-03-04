import express, { Request, Response, Router } from "express";

export const setupRoutes = (router: Router) => {
    router.get('/about', async (req: Request, res: Response) => {
        res.send('This is My Pet skeleton');
    })

    return router;
}
