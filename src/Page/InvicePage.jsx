import React, { Component, useState } from 'react';
import BillingHeader from '../components/BillHead/BillHeader';
import HeadPage from '../components/headerPage/HeaderPage';
import { colors } from "../Styles/Colors";
import { styles } from '../Styles/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ReactToPdf from "react-to-pdf";
import bookmark from "../Assets/bookmark.svg";
import invoice from "../Assets/invoice.svg";
import DialogBox from '../components/DialogBox';
import { useNavigate } from 'react-router-dom';

function InvicePage() {

    const ref = React.createRef();

    const [label, setLabel] = useState({
        invoice: "Invoice",
        date: "Date",
        dueDate: "Due Date",
        paymentTerms: "Payment Terms",
        poNumber: "PO Number",
        billFrom: "Bill from",
        billTo: "Bill To",
        shipTo: "ShipTo",
        item: "Item",
        quantity: "Quantity",
        rate: "Rate",
        amount: "Amount",
        subTotal: "Subtotal",
        notes: "Notes",
        discount: `Discount (${0}%)`,
        tax: `Tax (${0}%)`,
        shiping: "shipping",
        total: "Total",
        terms: "Terms",
        amountPaid: "Amount Paid",
        balanceDue: "Balance Due",
        tableheadItem: "Item",
        tableheadQuantity: "Quantity",
        tableheadRate: "Rate",
        tableheadAmount: "Amount",
        currency: "Currency",
        amountpaid: "Amount Paid",
        balancedue: "Balance Due",
    });
    const navicate = useNavigate();
    const option = {
        orientation: "landscape",
        unit: "in",
        format: [10, 10,],
    }

    const handleChange = (keys, value) => {
        setLabel({ ...label, [keys]: value });
    };
    const myInvoice = () => {
        navicate("/MyInvoice")
    }

    return (
        <>
            <div style={{ backgroundColor: colors.lightBlue }} >
                <Grid container spacing={1}>
                    <Grid xs={9}>
                        <div ref={ref}>
                            <HeadPage content={label} methods={handleChange} style={{marginTop:"20px"}}/>
                            <BillingHeader content={label} methods={handleChange} />
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className="sidemenu" style={{ marginTop: "50%" }}>
                            <Grid container item xs={3} direction="column" >
                                <DialogBox style={styles.CurrencyBtn} />
                            </Grid>
                            <Grid container item xs={3} direction="column" >
                                <ReactToPdf targetRef={ref} options={option} filename={`${label.invoice}.pdf`}>
                                    {({ toPdf }) => <button style={styles.PdfDownloadBtn} onClick={toPdf}>
                                        <Stack direction="row" alignItems="center" gap={1}>
                                            <ArrowCircleDownOutlinedIcon />
                                            <Typography style={{ fontSize: "14px" }}> Download Invoice</Typography>
                                        </Stack>
                                    </button>}
                                </ReactToPdf>
                            </Grid>
                            <Grid container item xs={3} direction="column" >
                                <button style={styles.saveinvoicebtn}  >
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <img src={bookmark} alt="bookmark" width={18} />
                                        {/* <BookmarkIcon /> */}
                                        <Typography style={{ fontSize: "14px" }}> SAVE INVOICE</Typography>
                                    </Stack>
                                </button>
                            </Grid>
                            <Grid container item xs={3} direction="column" >
                                <button style={styles.myinvoicebtn}  onClick={myInvoice} >
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <img src={invoice} alt="bookmark" width={18} />
                                        <Typography style={{ fontSize: "14px" }}> My Invoices</Typography>
                                    </Stack>
                                </button>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default InvicePage