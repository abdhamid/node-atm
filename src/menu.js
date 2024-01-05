const inquirer = require('inquirer');

const ACTIONS = {
	VIEW_BALANCE: `View account balance`,
	WITHDRAW: 'Withdraw cash',
	DEPOSIT: 'Deposit cash',
	TRANSFER: 'Transfer funds',
	EXIT: 'Exit app',
};

const menu = {
	type: 'list',
	name: 'mainMenu',
	message: 'Choose following actions :',
	choices: Object.values(ACTIONS),
};

function mainMenu(balance, withdraw, deposit, transfer) {
	inquirer.prompt(menu).then((answers) => {
		switch (answers.mainMenu) {
			case ACTIONS.VIEW_BALANCE:
				balanceMenu(balance);
				break;
			case ACTIONS.WITHDRAW:
				withdrawMenu(withdraw);
				break;
			case ACTIONS.DEPOSIT:
				depositMenu(deposit);
				break;
			case ACTIONS.TRANSFER:
				transferMenu(transfer);
				break;
			case ACTIONS.EXIT:
				break;
		}
	});
}

function balanceMenu(balance) {
	balance();
}

function withdrawMenu(withdraw) {
	inquirer
		.prompt({
			type: 'number',
			name: 'amount',
			message: 'Enter amount to withdraw :',
		})
		.then((answers) => {
			withdraw(answers.amount);
		});
}

function depositMenu(deposit) {
	inquirer
		.prompt({
			type: 'number',
			name: 'amount',
			message: 'Enter amount to deposit :',
		})
		.then((answers) => {
			deposit(answers.amount);
		});
}
function transferMenu(withdraw) {
	inquirer
		.prompt([
			{
				name: 'receiver',
				message: 'Enter receiver account :',
			},
			{
				type: 'number',
				name: 'amount',
				message: 'Enter amount to transfer :',
			},
		])
		.then((answers) => {
			withdraw(answers.receiver, answers.amount);
		});
}

module.exports = {
	mainMenu,
};
