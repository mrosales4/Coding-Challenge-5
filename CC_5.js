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
    console.log(`Department: ${this.department}`);
    console.log(`Bonus: $${bonus.toFixed(2)}`);
    console.log(`Total Annual Salary (including bonus): $${annualSalary.toFixed(2)}`);
    return annualSalary;
  }
}
