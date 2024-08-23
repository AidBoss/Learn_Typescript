class Department {
  id: number;
  name: string;
  private employees: string[];
  constructor(id: number, name: string, employees: string) {
    this.id = id;
    this.name = name;
    this.employees = employees.split(",").map((employee) => employee.trim());
  }
  sum(a: number, b: number) {
    return a + b;
  }
  description() {
    return `Department ID: ${this.id}, Name: ${this.name}`;
  }
  describe(this: Department) {
    console.log("Department: " + this.name + " role: ");
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee(tot: number) {
    // console.log(this.employees.length);
    // console.log(this.employees);
    console.log(tot);
  }
}

class ITDepartment extends Department {
  constructor(id: number, name: string, employees: string) {
    super(id, name, employees);
  }
  sum(a: number, b: number): number {
    return super.sum(a, b) * 2;
  }
}
let IT = new ITDepartment(1, "Technology", "Mer");
IT.describe();
const tot: number = IT.sum(4, 6);
const listEm: string[] = ["Ank", "Mark", "Yon", "Son"];
listEm.forEach((element) => {
  IT.addEmployee(element);
});
IT.printEmployee(tot);
// const ITCopy = { name: "mewmew", describe: IT.describe };
// ITCopy.describe();
const mews = (x: number, y: number, z: boolean): number => {
  return z === true ? x + y : x - y;
};
console.log(mews(4, 6, false));
