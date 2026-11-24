import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserIntoDB(req.body)
    res.status(201).json({
      success: true,
      message: "User created",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
};


const getAllUser =  async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersFromDB()
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}


const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // const id = req.params.id
   const result = await userService.getSingleUserFromDB(id as string)
    // console.log(result);
    if (result.rowCount === 0) {
      res.status(200).json({
        success: false,
        message: "User not found",
        // data: result.rows[0],
      });
    }
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    

    const result = await userService.updateSingleUSerFromDB(req.body, id as string)
    console.log(result);
    if (result.rowCount === 0) {
      res.status(200).json({
        success: false,
        message: "User not found",
        // data: result.rows[0],
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}

const deleteUser =  async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUserFromDB(id as string)
    console.log(result);
    if (result.rowCount === 0) {
      res.status(200).json({
        success: false,
        message: "User not found",
        // data: result.rows[0],
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      // data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}
export const userController = {
  createUser, getAllUser, getSingleUser, updateUser, deleteUser
};