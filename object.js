const person = {
	firstName: 'Nikki',
	lastName: 'Sato',
	logName: function () {
		console.log(`${this.firstName} ${this.lastName}`);
		console.log('person', this);
	},
	something: () => {
		console.log('something', `${this.firstName} ${this.lastName}}`);
        console.log('something', this);
	},
};

person.logName();
person.something();

// NEED TO USE THIS
