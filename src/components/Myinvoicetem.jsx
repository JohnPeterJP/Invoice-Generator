import * as React from 'react';
import Paper from '@mui/material/Paper';
import search from "../Assets/search.svg";
import trash from "../Assets/trash.svg";
import Export from "../Assets/export.svg";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Myinvoicetem() {
    const Styles = {
        inputFields: {
            border: 0,
            backgroundColor: "#f4f3f8",
            width: "96%",
            height: "40px",
            borderRadius: "10px",
            paddingRight: "30px",
            // textAlign: "center",
            // backgroundImage: imageUrl({ search }),
        },
        paper: {
            padding: "50px",
            height: "auto",

        },
        color: {
            display: "flex",
            borderRadius: "10px",
            alignContent: "center",
            justifyContent: "center",
            height: "auto",
            backgroundColor: "#f4f3f8",
            margin: "50px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        },
        icon: {
            width: "20px",
            position: "absolute",
            padding: "10px 12px",
            pointerEvents: "none",

        },
        parentcard: {
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-around",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "20px",
        },
        card: {
            border: " 2px solid #19bd9b",
            width: "25%",
            height: "100px",
            textAlign: "center",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "aliceblue",
        },
        trashicon: {
            width: "20px",
            position: "relative",
            top: "4px",
            left: "40px",
        },
        exporticon: {
            width: "20px",
            padding: "10px",
        },

    }
    return (
        <>
            <div className="background" style={Styles.color}>
                <Paper elevation={0} style={Styles.paper} >
                    <div className="header">
                        <h2>My invoices</h2>
                        <h4>We automatically save any invoices that you draft to your divoices</h4>
                        <div className="searchdiv" style={{ position: "relative" }}>
                            <img src={search} alt="Search" style={Styles.icon} />
                            <input type="text" id="Searchid" style={Styles.inputFields} />
                        </div>
                    </div>
                    <div className="parentCard" style={Styles.parentcard}>
                        <div className="card" style={Styles.card}>
                            <img src={trash} alt="trash" style={Styles.trashicon} />
                            <div className="carddata" >

                                first
                            </div>
                        </div>
                        <div className="card" style={Styles.card}>
                            <img src={trash} alt="trash" style={Styles.trashicon} />
                            <div className="carddata">
                                second
                            </div>
                        </div>
                        <div className="card" style={Styles.card}>
                            <img src={trash} alt="trash" style={Styles.trashicon} />
                            <div className="carddata">
                                three
                            </div>
                        </div>
                        <div className="card" style={Styles.card}>
                            <img src={trash} alt="trash" style={Styles.trashicon} />
                            <div className="carddata">
                                four
                            </div>
                        </div>
                        <div className="card" style={Styles.card}>
                            <img src={trash} alt="trash" style={Styles.trashicon} />
                            <div className="carddata">
                                five
                            </div>
                        </div>
                    </div>
                    <div className="basebthdiv" style={{float: "right",marginTop: "30%",}}>
                        <Stack spacing={2} direction="row">
                            <Stack direction="row" alignItems="center" gap={1}>
                                <Button variant="outlined"
                                    style={{
                                        fontWeight: "bold", color: "white",
                                        backgroundColor: "#19bd9b",
                                        border: "1px solid #19bd9b",
                                        borderRadius:"30px",
                                        width:"200px",
                                        height: "40px",
                                    }} >
                                    <img src={Export} alt="trash" style={Styles.exporticon} />

                                    EXPORT INVOICE  </Button>
                            </Stack>

                            <Stack direction="row" alignItems="center" gap={1}>
                                <Button variant="outlined"  style={{
                                        color: "#19bd9b",
                                        border: "1px solid #19bd9b",
                                        borderRadius:"30px",
                                        width:"200px",
                                        height: "40px",
                                    }}>NEW INVOICE</Button>
                            </Stack>
                        </Stack>
                    </div>
                </Paper>
            </div>
        </>
    );
}