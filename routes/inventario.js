const { Router } = require("express");

const {
  getInventarios,
  createInventario,
  getInventarioByID,
  updateInventarioByID,
  deleteInventarioByID,
  uploadImageByID,
  getImageByID,
} = require("../controllers/inventario");

const router = Router();
const { validarJwt } = require("../middlewares/validarJwt");
const { esAdmin } = require("../middlewares/validarRol");

router.get("/", validarJwt, getInventarios);

router.post("/", validarJwt, esAdmin, createInventario);

router.get("/:id", validarJwt, getInventarioByID);

router.put("/:id", validarJwt, esAdmin, updateInventarioByID);

router.delete("/:id", validarJwt, esAdmin, deleteInventarioByID);
/**
 * Sube foto de inventario
 */
router.post("/:id/images", uploadImageByID);

/**
 * get foto de inventario
 */
router.get("/:id/images", getImageByID);

module.exports = router;
