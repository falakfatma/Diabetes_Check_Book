import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function calender( {getValue, row, column, table }) {
    const date = getValue()
    const { updateData } = table.options.meta;
    return(
        <DatePicker 
            wrapperClassName="date-wrapper"
            dateFormat={"MMM d"}
            selected={date}
            onChange={
                (date)=>updateData(row.index,column.id,date)
            }
        />
    )
}
export default calender