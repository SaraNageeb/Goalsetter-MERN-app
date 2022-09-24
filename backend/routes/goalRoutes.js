const express = require('express');
const router = express.Router()
const{getGoals ,
    setGoal,
    updateGoal,
    deleteGoal,} =require("../controllers/goalController")
//router.get('/', getGoals);
//router.post('/',setGoal);   because both are the same rout '/' : replace with :-
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoal)

//router.put('/:id',updateGoal);
//router.delete('/:id', deleteGoal);
//because both are the same rout '/:id' : replace with :-
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)

module.exports = router
