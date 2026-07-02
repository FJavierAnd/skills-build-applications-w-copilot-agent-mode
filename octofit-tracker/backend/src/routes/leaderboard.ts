import { Router } from 'express';

const router = Router();

// GET global leaderboard
router.get('/', (req, res) => {
  res.json({ 
    message: 'Get global leaderboard', 
    data: []
  });
});

// GET team leaderboard
router.get('/team/:teamId', (req, res) => {
  const { teamId } = req.params;
  res.json({ 
    message: `Get leaderboard for team ${teamId}`, 
    teamId
  });
});

// GET leaderboard by activity type
router.get('/activity/:activityType', (req, res) => {
  const { activityType } = req.params;
  res.json({ 
    message: `Get leaderboard for activity ${activityType}`, 
    activityType
  });
});

export default router;
