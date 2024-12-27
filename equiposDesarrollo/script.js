const teamName = document.getElementById("team");
const enterpriseType = document.getElementById("enterprise");
const fundation = document.getElementById("year");
const headDirector = document.getElementById("head-director");
const employeeCards = document.getElementById("employee-cards");
const employeesDropdownList = document.getElementById("employees");
const developmentTeam = {
  team: "Development Team",
  enterprise: "WebIon",
  year: 2010,
  isLead: true,
  headDirector: {
    directorName: "Cassiel Rodriguez",
  },
  employees: [
    {
      name: "Ana Baker",
      position: "front-end",
      number: 1,
      isLead: false,
    },
    {
      name: "Mario Batista",
      position: "back-end",
      number: 2,
      isLead: false,
    },
     {
      name: "Rachel Ortega",
      position: "back-end",
      number: 3,
      isLead: false,
    },
    {
      name: "Joshua Borghi",
      position: "back-end",
      number: 4,
      isLead: false,
    },
    {
      name: "Marcus Brown",
      position: "security",
      number: 5,
      isLead: false,
    },
    {
      name: "Daniela Passarella",
      position: "security",
      number: 6,
      isLead: false,
    },
    {
      name: "Diego Rivera",
      position: "front-end",
      number: 7,
      isLead: false,
    },
    {
      name: "Nick Clausen",
      position: "security",
      number: 8,
      isLead: true,
    },
    {
      name: "Martha Carpenter",
      position: "security",
      number: 9,
      isLead: false,
    },
    {
      name: "Alex Valdovinos",
      position: "back-end",
      number: 10,
      isLead: true,
    },
    {
      name: "Gwen Jefferson",
      position: "front-end",
      number: 11,
      isLead: true,
    },
    {
      name: "Héctor Pausini",
      position: "back-end",
      number: 12,
      isLead: false,
    },
    {
      name: "Oscar Ramirez",
      position: "security",
      number: 13,
      isLead: false,
    },
    {
      name: "Manuel Giusti",
      position: "back-end",
      number: 14,
      isLead: false,
    },
    {
      name: "Elizabeth Islas",
      position: "databases",
      number: 15,
      isLead: false,
    },
    {
      name: "Cassandra Santandrea",
      position: "security",
      number: 16,
      isLead: false,
    },
    {
      name: "Pedro Pasculli",
      position: "front-end",
      number: 17,
      isLead: false,
    },
    {
      name: "Nery Martinez",
      position: "databases",
      number: 18,
      isLead: true,
    },
    {
      name: "Erika Ruggeri",
      position: "security",
      number: 19,
      isLead: false,
    },
    {
      name: "Carlos Tapia",
      position: "back-end",
      number: 20,
      isLead: false,
    },
    {
      name: "Stacy Trobbiani",
      position: "back-end",
      number: 21,
      isLead: false,
    },
    {
      name: "Juan Zelada",
      position: "databases",
      number: 22,
      isLead: false,
    },
  ],
};

Object.freeze(developmentTeam);
const { enterprise, team, year, employees } = developmentTeam;
const { directorName } = developmentTeam.headDirector;

enterpriseType.textContent = enterprise;
teamName.textContent = team;
fundation.textContent = year;
headDirector.textContent = directorName;

const setEmployeeCards = (arr = employees) => {
  employeeCards.innerHTML += arr
    .map(
      ({ name, position, number, isLead }) =>
        `
        <div class="employee-card">
          <h2>${isLead ? "(Lead)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
        </div>
      `
    )
    .join("");
};

employeesDropdownList.addEventListener("change", (e) => {
  employeeCards.innerHTML = "";

  switch (e.target.value) {
    case "front-end":
      setEmployeeCards(employees.filter((employee) => employee.position === "front-end"));
      break;
    case "back-end":
      setEmployeeCards(
        employees.filter((employee) => employee.position === "back-end")
      );
      break;
    case "security":
      setEmployeeCards(
        employees.filter((employee) => employee.position === "security")
      );
      break;
    case "databases":
      setEmployeeCards(
        employees.filter((employee) => employee.position === "databases")
      );
      break;

default:
  setEmployeeCards();

  }
});
