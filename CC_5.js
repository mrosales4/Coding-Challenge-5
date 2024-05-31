// U22978120

// Creating employee class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Name: ${this.name}, Monthly Salary: $${this.salary.toFixed(2)}`);
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

// Creating manager subclass
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
    // Adding bonus calculation
  calculateAnnualSalary() {
    const bonus = this.salary * 0.15; 
    const annualSalary = super.calculateAnnualSalary() + bonus;
    console.log(`${this.name} ( ${this.department} )`);
    console.log(`Bonus: $${bonus.toFixed(2)}`);
    console.log(`Total Annual Salary (including bonus): $${annualSalary.toFixed(2)}`);
    return annualSalary;
  }
}

// Instantiate Manager Objects
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
const manager2 = new Manager("Debbie Little", 7205, "Finance");

manager1.calculateAnnualSalary();
manager2.calculateAnnualSalary();
