import type { NextFunction, Request, Response } from "express";


const auth = async(req : Request, res : Response, next: NextFunction) =>{
console.log("This is protected route");
}

export default auth