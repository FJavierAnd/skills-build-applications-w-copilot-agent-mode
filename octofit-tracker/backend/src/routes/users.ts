import { Router } from 'express';

const router = Router();

// GET all users
router.get('/', (req, res) => {
  res.json({ 
    message: 'Get all users', 
    data: []
  });
});

// GET user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Get user ${id}`, 
    userId: id
  });
});

// POST create new user
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'User created',
    data: req.body
  });
});

// PUT update user
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `User ${id} updated`,
    userId: id,
    data: req.body
  });
});

// DELETE user
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `User ${id} deleted`,
    userId: id
  });
});

export default router;
