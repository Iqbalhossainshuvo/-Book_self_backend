import express from 'express';
import { createBooksController } from './Books.Contrlller';


const router = express.Router()

router.post('/',createBooksController.createBooks )
router.get('/book', createBooksController.topSellBook)
router.get('/',createBooksController.getAllBook)
router.get('/:id', createBooksController.getSingleBook)
router.delete('/:id',createBooksController.deleteBook)
router.patch('/:id',createBooksController.updateBook)


export const bookRoute = router