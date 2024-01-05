const inquirer = require('inquirer');
const { mainMenu } = require('./menu');

const account = {
	pin: 123456,
	balance: 100,
};

function login() {
	inquirer
		.prompt({
			type: 'password',
			message: 'Enter your PIN number :',
			name: 'pin',
			mask: '*',
		})
		.then((answers) => {
			if (answers.pin == account.pin) {
				mainMenu(balance, withdraw, deposit, transfer);
			} else {
				console.log('Please enter a valid PIN');
				login();
			}
		});
}

function balance() {
	console.log(`Your balance is $${account.balance}\n`);
	mainMenu(balance, withdraw, deposit, transfer);
}
function withdraw(amount) {
	if (_isSufficient(amount)) {
		account.balance -= amount;
		console.log(
			`Withdrew $${amount} from balance. Current balance : $${account.balance}\n`
		);
		mainMenu(balance, withdraw, deposit, transfer);
	} else {
		console.log('Insufficient balance\n');
		mainMenu(balance, withdraw, deposit, transfer);
	}
}

function deposit(amount) {
	account.balance += amount;
	console.log(
		`Deposited $${amount} from balance. Current balance : $${account.balance}\n`
	);
	mainMenu(balance, withdraw, deposit, transfer);
}
function transfer(receiver, amount) {
	if (_isSufficient(amount)) {
		account.balance -= amount;
		console.log(
			`Transferred $${amount} to ${receiver}. Current balance : $${account.balance}\n`
		);
		mainMenu(balance, withdraw, deposit, transfer);
	} else {
		console.log('Insufficient balance\n');
		mainMenu(balance, withdraw, deposit, transfer);
	}
}

function _isSufficient(amount) {
	return amount < account.balance;
}

function main() {
	login();
}
main();
