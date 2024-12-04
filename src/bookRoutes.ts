import { Router } from 'express';
import { getBooks, addBook } from '../controllers/bookController';

const router = Router();

// Rota para listar todos os livros
router.get('/', getBooks);

// Rota para adicionar um novo livro
router.post('/', addBook);

export default router;
