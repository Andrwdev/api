import { Request, Response, Router } from "express";
import { getEstates } from "../service";

const router = Router();

router.get("/estates", async (req: Request, res: Response) => {
    const resp = await getEstates(req.query);

    res.status(resp.code).send(resp.data);
});

export default router;
