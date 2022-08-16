import "./app.css";
import Appinfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {

	const data = [
		{name: "Палач", salary: 800, increase: false},
		{name: "Камбала", salary: 3000, increase: true},
		{name: "КФСишник", salary: 5000, increase: false},
	];

	return (
		<div className="app">
			<Appinfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data}/>
			<EmployeesAddForm />
		</div>
	);
}

export default App;
