const { check } = require('express-validator');

exports.userSignupValidator = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('Name is required.'),

	check('email')
		.isEmail()
		.withMessage('Please use proper email format.'),

	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long.')
];

exports.userLoginValidator = [
	check('email')
		.isEmail()
		.withMessage('Please use proper email format.'),

	check('password')
		.isLength({ min: 6 })
		.withMessage('Password must be at least 6 characters long.')
];
