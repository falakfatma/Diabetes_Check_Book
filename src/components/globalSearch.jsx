const Global_Search_Input = ({ columnFilters, setColumnFilters }) => {
    const firstNameFilter = columnFilters.find(f => f.id === "firstName")?.value || "";
    const lastNameFilter = columnFilters.find(f => f.id === "lastName")?.value || "";
    const onFilterChange = (id, value) => {
        setColumnFilters((pre) => 
            pre.filter(f =>f.id !== id).concat({id, value})
        )
    }
    console.log(firstNameFilter)
    return (
        <> 
            <input
                placeholder="FirstName...."
                value={firstNameFilter}
                onChange={e => onFilterChange("firstName", e.target.value)}
            />
            <input
                placeholder="Last Name...."
                value={lastNameFilter}
                onChange={e => onFilterChange("lastName", e.target.value)}

            />
        </>
    )
}
export default Global_Search_Input