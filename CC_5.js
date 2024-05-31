// 22978120

// Employee Class
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
