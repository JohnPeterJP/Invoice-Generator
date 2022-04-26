import * as React from 'react';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import  arrow from "../Assets/arrow.svg";
export default function CustomInput() {
    const [value, setValue] = React.useState(new Date());
    const Styles = {
        inputFields: {
            border: 0,
            backgroundColor: "#19bd9b",
            color: "white",
            width: "70%",
            textAlign: "center",
        },
        calender: {
            marginRight: "20px",
        },
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} style={{width:"100%"}}>
            <DatePicker
                label="Custom input"
                value={value}

                onChange={(newValue) => {
                    setValue(newValue);
                    // handleUserDetails()
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                    <Box style={Styles.calender} sx={{ display: 'flex', justifyContent: "end" }}>
                        <input ref={inputRef} {...inputProps} id="inputFields" style={Styles.inputFields}/>
                        <img src={arrow} alt="arrow"
                            style={{ width: "10%", }} onClick={InputProps} />
                        <section style={{ opacity: 0, width: "0px", marginTop: "10px", position: "relative", right: "35px" }}>
                            {InputProps?.endAdornment}
                        </section>
                    </Box>
                )}
            />
        </LocalizationProvider>
    );
}