const express = require('express');
const router = express.Router()
const{getGoals ,
    setGoal,
    updateGoal,
    deleteGoal,} =require("../controllers/goalController")
//router.get('/', getGoals);
//router.post('/',setGoal);   because both are the same rout '/' : replace with :-
router.route('/').get(getGoals).post(setGoal)

//router.put('/:id',updateGoal);
//router.delete('/:id', deleteGoal);
//because both are the same rout '/:id' : replace with :-
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router
