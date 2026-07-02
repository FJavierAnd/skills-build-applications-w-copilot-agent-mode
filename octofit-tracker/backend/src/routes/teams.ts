import { Router } from 'express';

const router = Router();

// GET all teams
router.get('/', (req, res) => {
  res.json({ 
    message: 'Get all teams', 
    data: []
  });
});

// GET team by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Get team ${id}`, 
    teamId: id
  });
});

// POST create new team
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'Team created',
    data: req.body
  });
});

// PUT update team
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Team ${id} updated`,
    teamId: id,
    data: req.body
  });
});

// DELETE team
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Team ${id} deleted`,
    teamId: id
  });
});

export default router;
