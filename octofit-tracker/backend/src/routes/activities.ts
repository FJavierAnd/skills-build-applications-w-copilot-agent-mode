import { Router } from 'express';

const router = Router();

// GET all activities
router.get('/', (req, res) => {
  res.json({ 
    message: 'Get all activities', 
    data: []
  });
});

// GET activity by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Get activity ${id}`, 
    activityId: id
  });
});

// GET activities by user
router.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({ 
    message: `Get activities for user ${userId}`, 
    userId
  });
});

// POST create new activity
router.post('/', (req, res) => {
  res.status(201).json({ 
    message: 'Activity created',
    data: req.body
  });
});

// PUT update activity
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Activity ${id} updated`,
    activityId: id,
    data: req.body
  });
});

// DELETE activity
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ 
    message: `Activity ${id} deleted`,
    activityId: id
  });
});

export default router;
