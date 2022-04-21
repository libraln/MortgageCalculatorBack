import { Router } from 'express'
import { saveBank, deleteBank, updateBank, getBankById, getBanks } from '../controllers/controller.js'

const router = Router()

router.get('/bank', getBanks)
router.post('/bank', saveBank)
router.delete('/bank', deleteBank)
router.put('/bank', updateBank)
router.get('/:id', getBankById)

export default router
