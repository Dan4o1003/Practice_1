// const API = "http://localhost:3000/api/employees";


// const tbody = document.getElementById("tbody")

// function renderRows(employees) {
//   tbody.innerHTML = "";

//   employees.forEach((e) => {
//     const tr = document.createElement("tr");

//     const projects = Array.isArray(e.projects) && e.projects.length
//       ? e.projects.join(", ")
//       : "—";

//     tr.innerHTML = `
//       <td>${e.employee ?? "—"}</td>
//       <td>${e.organization ?? "—"}</td>
//       <td>${e.object ?? "—"}</td>
//       <td>${projects}</td>
//       <td>${e.position ?? "—"}</td>
//       <td>${formatDate(e.hireDate)}</td>
//     `;

//     tbody.appendChild(tr);
//   });
// }


// async function Employee()  {
//         const res = await axios.get(API)
//         console.log(res.data)

//         console.log(renderRows.data)
// }


// async function loadEmplpoyees() {
//     try {
//         const res = await axios.get(API)

//        renderRows(res.data)
//     }catch (e) {
//         console.log("Hello");
//     }
// }


// loadEmplpoyees()



const API = "http://localhost:3000/employees";
const tbody = document.getElementById("tbody");

function formatDate(dateString) {
  if (!dateString) return "—";
  return new Date(dateString).toLocaleDateString();
}

function renderRows(employees) {
  tbody.innerHTML = "";

  employees.forEach((e) => {
    const tr = document.createElement("tr");

    const projects = Array.isArray(e.projects) && e.projects.length
      ? e.projects.join(", ")
      : "—";

    tr.innerHTML = `
      <td>${e.employee ?? "—"}</td>
      <td>${e.organization ?? "—"}</td>
      <td>${e.object ?? "—"}</td>
      <td>${projects}</td>
      <td>${e.position ?? "—"}</td>
      <td>${formatDate(e.hireDate)}</td>
    `;

    tbody.appendChild(tr);
  });
}

async function loadEmployees() {
  try {
    const res = await axios.get(API);
    renderRows(res.data);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
}

loadEmployees();
