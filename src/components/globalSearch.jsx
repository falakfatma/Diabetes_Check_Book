const Global_Search_Input = ({ columnFilters, setColumnFilters }) => {
    const nameFilter = columnFilters.find(f => f.id === "firstName")?.value || "";
    const onFilterChange = (id, value) => {
        setColumnFilters((pre) => 
            pre.filter(f =>f.id !== id).concat({id, value})
        )
    }
    console.log(nameFilter)
    return (
        <input
            placeholder="FirstName...."
            value={nameFilter}
            onChange={e => onFilterChange("firstName", e.target.value)}
        />
    )
}
export default Global_Search_Input