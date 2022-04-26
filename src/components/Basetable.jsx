import React from "react";
import { useState, useEffect } from "react";
import "../components/Table/Table.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Basetable = (props) => {
    const tableContent = props.content
    console.log(tableContent)

    const [orderDetails, setOrderDetails] = useState([
        {
            id: 1, item: "one", quantity: "1", rate: 100, amount: 100
        }
    ])

    const [total, setTotal] = useState({
        subTotal: 0, total: 0, discount: 0, tax: 0, shipping: 0, amountPaid: 0, balanceDue: 0,
        notescontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        termscontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    })

    const Styles = {
        addItem: {
            position: "absolute",
            left: 0,
            marginTop: "20px",
            fontSize: "10px"
        },
        canceltableBtn: {
            margin: "15px 5px",
            fontSize: "20px",
        },
    }
    const handleCreateElm = () => {
        setOrderDetails([...orderDetails,
        { id: orderDetails.length + 1, item: "", quantity: "", rate: 0, amount: 0, balancedue: 0, amountpaid: 0 }
        ])
        console.log(orderDetails)

    }

    const handleChange = (e, index) => {
        const keys = e.target.name
        const value = e.target.value

        const tempArr = orderDetails.map((obj) => {
            if (obj.id === index) {
                obj[keys] = value
            }

            return obj
        })

        setOrderDetails(tempArr)
    }

    const handlelabelChange = () => {

    }

    const handleCancelRow = (e, index) => {
        orderDetails.splice(index, 1)
        setOrderDetails([...orderDetails])
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="baseleft">
                            <div className="leftarea">
                                <input type="text" name="" value="notes" id="notes" />
                                <textarea name="" id="Bottom" cols="30" rows="3" value={total.notescontent}></textarea>
                            </div>
                            <div className="leftarea">
                                <input type="text" name="" value="terms" id="notes" />
                                <textarea name="" id="Bottom" cols="30" rows="3" value={total.termscontent}></textarea>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div id="calculationPart">
                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="subtotal" id="subTotal" />
                                <input type="text" name="" value={total.subTotal} id="value" />
                            </div>
                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="discount" id="subTotal" />
                                <input type="text" name="" value={total.discount} id="value" />
                            </div>

                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="tax" id="subTotal" />
                                <input type="text" name="" value={total.tax} id="value" />
                            </div>
                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="Shiping" id="subTotal" />
                                <input type="text" name="" value={total.shipping} id="value" />
                            </div>
                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="total" id="subTotal" />
                                <input type="text" name="" value={total.total} id="value" />
                            </div>


                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="amountpaid" id="subTotal" />
                                <input type="text" name="" value={total.amountpaid} id="Billdue" />
                            </div>
                            <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                <input type="text" name="" value="balancedue" id="subTotal" />
                                <input type="text" name="" value={total.balancedue} id="Billdue" />
                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </>


    )
}

export default Basetable