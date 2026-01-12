import { Router } from "express";
import {
  registerUser,
  loginUser,
  checkAuth,
  createProject,
  getAllProject,
  getSingleProject,
  updateSingleProject,
  deleteSingleProject,
  createTask,
  getAllTask,
  getSingleTask,
  updateSingleTask,
  deleteTask,
  createSubTask,
  getAllSubTask,
  getSingleSubTask,
  updateSubTask,
  deleteSubTask,
  createComment,
  getAllComment,
  updateSingleComment,
  deleteComment,
  toggleComplete,
} from "../controllers/user.Controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/registerUser").post(registerUser);

router.route("/loginUser").post(loginUser);

router.route("/checkAuth").get(verifyJWT, checkAuth);

router.route("/createProject").post(verifyJWT, createProject);

router.route("/getProjects").get(verifyJWT, getAllProject);

router.route("/getProject/:id").get(verifyJWT, getSingleProject);

router.route("/editProject/:id").patch(verifyJWT, updateSingleProject);

router.route("/destroyProject/:id").delete(verifyJWT, deleteSingleProject);

router.route("/createTask").post(verifyJWT, createTask);

router.route("/getTasks").get(verifyJWT, getAllTask);

router.route("/getTask/:id").get(verifyJWT, getSingleTask);

router.route("/editTask/:id").patch(verifyJWT, updateSingleTask);

router.route("/destroyTask/:id").delete(verifyJWT, deleteTask);

router.route("/toggleTask/:id").put(verifyJWT, toggleComplete);

router.route("/createSubTask").post(verifyJWT, createSubTask);

router.route("/getSubTask").get(verifyJWT, getAllSubTask);

router.route("/getSubTask/:id").get(verifyJWT, getSingleSubTask);

router.route("/editSubTask/:id").patch(verifyJWT, updateSubTask);

router.route("/destroySubTask/:id").delete(verifyJWT, deleteSubTask);

router.route("/createComment").post(verifyJWT, createComment);

router.route("/getComments").get(verifyJWT, getAllComment);

router.route("/editComment/:id").patch(verifyJWT, updateSingleComment);

router.route("/destroyComment/:id").delete(verifyJWT, deleteComment);

export default router;
