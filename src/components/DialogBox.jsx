import * as React from 'react';
// import "../styles/css/currencyDialog.css"
import MenuItem from '@mui/material/MenuItem';
import { colors } from '../Styles/Colors';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import search from "../Assets/search.svg"
import { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function DialogBox() {
    const [Currency, setCurrency] = useState({})

    const [open, setOpen] = React.useState(false);
    const styles = {
        searchicon: {
            width: "20px",
            position: "absolute",
            padding: "10px 12px",
            pointerEvents: "none",
        },
        searchInput: {
            border: "0px",
            backgroundColor: "rgb(244, 243, 248)",
            width: "96%",
            height: "40px",
            borderRadius: "10px",
            // paddingRight: "30px",
        },
        currencydr: {
            margin: "16px 0px",
            color: "rgb(25, 189, 155)",
            border: "none",
            backgroundColor: "transparent",
            border:"0px",
            outline: "0px",
        },

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const countryName = [
        {
            contryName: "United Kingdom",
            symbol: "£",
        }, {
            contryName: "United States Dollar",
            symbol: "$",
        }, {
            contryName: "India Rupee",
            symbol: "₹",
        },
    ];

    const handleChange = (e, countryName, symbol) => {
        setCurrency({ name: countryName, sym: symbol })
        setOpen(false)
    }

    return (
        <div
            style={{
                display: "flex",
                color: colors.lightGreen,
            }}>
            <p style={{ margin: 0, marginTop: "14px", marginRight: '5px', color: 'black' }}>
                Currency<span>:</span>
            </p>

            <p onClick={handleClickOpen}
                style={{ margin: 0, marginTop: "14px" }}>
                {Currency.name}
                INR(₹)
            </p>

            <select id="selectMenu" style={styles.currencydr} value={Currency.name} onClick={handleClickOpen}></select>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClickClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
                >Select Currency <CloseIcon onClick={handleClickClose} /></DialogTitle>
                {/* <div class="searchdiv" style="position: relative;">
                    <img src={search} alt="Search" style={style.searchicon}/>
                        <input type="text" id="Searchid" 
                        style={style.searchInput}/>
                        </div> */}
                <section id="seachbarDiv" style={{ position: "relative" }}>
                    <img src={search} alt="seach" style={{ width: "20px", position: "absolute", padding: "10px 12px", pointerEvents: "none", }} />
                    <input type="text" id='searchbar' style={styles.searchInput} />
                </section>
                <DialogContent>
                    {
                        countryName.map((obj, index) => {
                            return (
                                <MenuItem style={{
                                    display: "flex", flexDirection: "row",
                                    width: "400px",
                                    value: obj.contryName
                                }} id={index} onClick={(e) => { handleChange(e, obj.contryName, obj.symbol) }}>
                                    <section>
                                        {obj.contryName}
                                    </section>
                                    <MenuItem style={{
                                        position: "absolute", right: 0
                                    }}>
                                        {obj.symbol}
                                        <NavigateNextIcon />
                                    </MenuItem>
                                </MenuItem>
                            )
                        })
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}