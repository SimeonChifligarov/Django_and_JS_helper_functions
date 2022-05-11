class Company {
    constructor() {
        this.departments = new Map();
    }

    static Employee = class Employee {
        constructor(username, salary, position) {
            this.username = username;
            this.salary = salary;
            this.position = position;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            this._validateParameter(value);
            this._username = value;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            this._validateParameter(value);
            if (value < 0) {
                throw new Error('Invalid input!');
            }
            this._salary = value;
        }

        get position() {
            return this._position;
        }

        set position(value) {
            this._validateParameter(value);
            this._position = value;
        }

        _validateParameter(value) {
            if (value === undefined || value === null || value === '') {
                throw new Error('Invalid input!')
            }
        }

        compareTo(other) {
            return other.salary - this.salary || this.username.localeCompare(other.username);
        }

        toString() {
            return `${this.username} ${this.salary} ${this.position}`
        }
    }




    addEmployee(username, salary, position, departament) {
        if (departament === undefined || departament === null || departament === '') {
            throw new Error('Invalid input!');
        }

        if (!this.departments.has(departament)) {
            this.departments.set(departament, []);
        }

        let employee = new Company.Employee(username, salary, position);
        let workers = this.departments.get(departament);
        workers.push(employee);
        return `New employee is hired. Name: ${username}. Position: ${position}`;

    }

    bestDepartment() {
        let sortedDepartments = [...this.departments].sort(([aName, aWorkers], [bName, bWorkers]) => {
            let aAvgSalary = this._getAvgSalary(aName);
            let bAvgSalary = this._getAvgSalary(bName);
            return bAvgSalary - aAvgSalary;
        })

        let [bestDepartmentName, bestDepartmentWorkers] = sortedDepartments[0];
        bestDepartmentWorkers.sort((a, b) => a.compareTo(b));

        let departmentInfo = [`Best Department is: ${bestDepartmentName}`];
        departmentInfo.push(`Average salary: ${this._getAvgSalary(bestDepartmentName).toFixed(2)}`);
        // bestDepartmentWorkers.map(w => departmentInfo.push(w.toString()));
        for (const w of bestDepartmentWorkers) {
            departmentInfo.push(w.toString());
        }

        return departmentInfo.join('\n');
    }

    _getAvgSalary(departmentName) {
        let departmentWorkers = this.departments.get(departmentName);
        let avgSalary = departmentWorkers.reduce((acc, w) => acc + w.salary, 0) / departmentWorkers.length;
        return avgSalary;
    }

}


// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());
// 