import React from "react";
import { useState, useEffect } from "react";
import "../Table/Table.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';



const Table = (props) => {
    const tableContent = props.content

    const [orderDetails, setOrderDetails] = useState([
        { id: 1, item: "one", quantity: 0, rate: 0, amount: 0 }
    ])
    const [total, setTotal] = useState({
        amount: 0, subTotal: 0, Total: 0, discount: 0, tax: 0, shipping: 0, amountPaid: 0, balanceDue: 0,
        notescontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        termscontent: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    })
    // const [isDiscounttrue , setisDiscounttrue] = useState(false);
    const [isTaxtrue, setisTaxtrue] = useState(false)
    const [isShipping, setisShipping] = useState(false)
    const [isDiscounttrue, setisDiscounttrue] = useState(false)


    useEffect(() => {

        let initialtotal = ((total.subTotal - total.discount + (total.tax)) + Number(total.shipping));
        setTotal({ ...total, Total: initialtotal });
    }, [orderDetails, total]);

    const Styles = {
        addItem: {
            fontSize: "10px"
        },
        canceltableBtn: {
            margin: "5px 5px",
            fontSize: "20px",
        },
    }
    const handleChange = async (e, index) => {
        const key = e.target.name
        const value = e.target.value
        const tempArr = orderDetails.map((elm) => {
            if (elm.id === index) {
                elm[key] = value
                if (key === "quantity" || key === "rate") {
                    let amount = + elm.quantity * elm.rate;
                    elm.amount = amount;
                }
            }
            return elm
        })
        setOrderDetails(tempArr)
        subTotalamount();
        // handleDiscountlableChange();
        // handleShippingChange();
        // TotalAmount();
    }

    const subTotalamount = async () => {
        let subtotal = orderDetails
            .reduce((total, Sub) => total + Sub.rate * Sub.quantity, 0);
        setTotal({ ...total, subTotal: subtotal });

    }
    // const TotalAmount = () => {
    //     let initialtotal = ((total.subTotal - total.discount + (total.tax)) + Number(total.shipping));
    //     setTotal({ ...total, Total: initialtotal });
    // }
    const handleShippingChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        switch (key) {
            case "shipping":
                let shippingamount = value;
                setTotal({ ...total, shipping: shippingamount })
                props.methods(key, value);
                break;
            case "amountpaid":
                let amountpaid = value;
                setTotal({ ...total, amountPaid: amountpaid })
                props.methods(key, value);
                break;
            default:
                props.methods(key, value);
                break;
        }

    }

    const handleCreateElm = () => {
        setOrderDetails([...orderDetails,
        { id: orderDetails.length + 1, item: "", quantity: "", rate: 0, amount: 0, balancedue: 0, amountpaid: 0 }])
    }



    const handlelabelChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        props.methods(key, value);

    }

    const handleDiscountlableChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        let spitValue = value.split(" ")
        let per = spitValue[1]
        switch (key) {
            case "discount":
                let discountpercentage = per.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '')
                let discountreplace = `Discount (${discountpercentage}%)`
                props.methods(key, discountreplace)
                let discunt = ((discountpercentage * total.subTotal) / 100)
                setTotal({ ...total, discount: discunt })

                break;
            case "tax":
                let taxpercentage = per.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '')
                let taxreplace = `Discount (${taxpercentage}%)`
                props.methods(key, taxreplace)
                let taxamount = ((taxpercentage * total.subTotal) / 100)
                setTotal({ ...total, tax: taxamount })
                props.methods(key, value);
                break;
            default:
                props.methods(key, value);
                break;
        }

    }

    const handleCancelRow = (e, index) => {
        orderDetails.splice(index, 1)
        setOrderDetails([...orderDetails])
        handleChange();

    }

    const isDiscountMoniter = () => {
        setisDiscounttrue(true);
    }
    const isTaxmoniter = () => {
        setisTaxtrue(true);
    }
    const isShippingMoniter = () => {
        setisShipping(true);
    }
    const handleClose = (e, n) => {
        let attribute = e.target.name;
        let name = n;
        switch (name) {
            case "Discountcross":
                setisDiscounttrue(false);
                break;
            case "Taxcross":
                setisTaxtrue(false);
                break;
            case "Shippingcross":
                setisShipping(false);
                break;

            default:
                break;
        }
    }
    return (

        <div id="parentContainer">
            <Grid container item xs={12} direction="column" >
                <div className="table">
                    <div className="tablehead">
                        <div className="tableth" style={{ width: "58%" }}>
                            <input type="text" name="tableheadItem"
                                style={{ width: "100%" }}
                                value={tableContent.tableheadItem}
                                id="thOtherLabels"
                                onChange={handlelabelChange}
                            />
                        </div>
                        <div className="tableth"> <input type="text"
                            id="thOtherLabels" name="tableheadQuantity"
                            value={tableContent.tableheadQuantity}
                            onChange={handlelabelChange}
                        />
                        </div>
                        <div className="tableth"><input type="text" name="tableheadRate"
                            value={tableContent.tableheadRate}
                            onChange={handlelabelChange}
                            id="thOtherLabels"
                        />
                        </div>
                        <div className="tableth"><input type="text" name="tableheadAmount"
                            value={tableContent.tableheadAmount}
                            onChange={handlelabelChange}
                            id="thOtherLabels"
                        />
                        </div>
                        {/* <div className="tableth">
                        </div> */}

                    </div>

                    {/* <div className="tableboday"> */}
                    {
                        orderDetails.map((obj, index) => {
                            let iscnacelbtn = orderDetails.length > 1 ? "block" : "none";
                            let backgroundcolor = index % 2 === 0 ? "#F4F3F8" : "#FFFFFF"
                            return (
                                <div className="tabletr" key={index}>
                                    <div className="tabletd" style={{ width: "70%" }}>
                                        <input type="text" style={{ width: "100%", backgroundColor: backgroundcolor }}
                                            name="item" value={obj.item}
                                            onChange={(e) => { handleChange(e, obj.id) }}
                                            id="tbodyinputfields"
                                        />
                                    </div>
                                    <div className="tabletd">
                                        <input type="text"
                                            name="quantity" value={obj.quantity}
                                            style={{ backgroundColor: backgroundcolor }}
                                            onChange={(e) => { handleChange(e, obj.id) }}
                                            id="tbodyinputfields"
                                        /></div>
                                    <div className="tabletd">
                                        <input type="text"
                                            name="rate" value={obj.rate}
                                            style={{ backgroundColor: backgroundcolor }}
                                            onChange={(e) => { handleChange(e, obj.id) }}
                                            id="tbodyinputfields"
                                        /></div>
                                    <div className="tabletd">
                                        <input type="text"
                                            name="rate" value={obj.amount}
                                            // style={{backgroundcolor}}
                                            onChange={(e) => { handleChange(e, obj.id) }}
                                            id="tbodyinputfields"
                                            style={{ backgroundColor: 'white' }}
                                        /></div>

                                    <div className="tabletd" style={{ display: iscnacelbtn }}>
                                        <CloseIcon id="Cancelbtn" style={Styles.canceltableBtn} onClick={(e) => { handleCancelRow(e, index) }} />
                                        {/* <HighlightOffIcon id="Cancelbtn"  style={Styles.canceltableBtn} onClick={(e) => { handleCancelRow(e, index) }} /> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* </div> */}
                </div>
            </Grid>
            <Grid container item xs={12} direction="column" >
                <div className="addbtn">
                    <Button style={Styles.addItem} onClick={handleCreateElm}>
                        <AddIcon style={{ fontSize: "12px" }} />Add Item
                    </Button>
                </div>
                < div className="basediv" >
                    <Grid container columns={{ xs: 6, md: 12 }}>
                        <Grid item xs={6}>
                            <div className="baseleft">
                                <div className="leftarea">
                                    <input type="text" name="notes" value={tableContent.notes} id="notes" />
                                    <textarea name="notes" id="Bottom" cols="30" rows="3" value={total.notescontent}></textarea>
                                </div>
                                <div className="leftarea">
                                    <input type="text" name="termscontent" value={tableContent.terms} id="notes" />
                                    <textarea name="termscontent" id="Bottom" cols="30" rows="3" value={total.termscontent}></textarea>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div id="calculationPart">
                                <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                    <input type="text" name="lblsubTotal" value={tableContent.subTotal} id="subTotal" onChange={handlelabelChange} />
                                    <input type="text" name="subTotal" value={total.subTotal} id="value" style={{ outline: "none" }} />
                                </div>
                                <div className="todel" style={{ display: "flex", flexDirection: "row", display: (isDiscounttrue ? 'flex' : 'none') }} >
                                    <input type="text" name="discount" value={tableContent.discount} id="subTotal" style={{ color: "blue" }} onChange={handleDiscountlableChange} />
                                    <input type="text" name="discount" value={total.discount} id="value" />
                                    <CloseIcon id="Cancelbtn" name="Discountcross" style={Styles.canceltableBtn} onClick={(e) => { handleClose(e, "Discountcross") }} />
                                </div>

                                <div className="todel" style={{ display: "flex", flexDirection: "row", display: (isTaxtrue ? 'flex' : 'none') }} >
                                    <input type="text" name="tax" value={tableContent.tax} id="subTotal" style={{ color: "blue" }} onChange={handleDiscountlableChange} />
                                    <input type="text" name="tax" value={total.tax} id="value" />
                                    <CloseIcon id="Cancelbtn" name="Taxcross" style={Styles.canceltableBtn} onClick={(e) => { handleClose(e, "Taxcross") }} />
                                </div>
                                <div className="todel" disabled={true} style={{ display: "flex", flexDirection: "row", display: (isShipping ? 'flex' : 'none') }} >
                                    <input type="text" name="lblshipping" value={tableContent.shiping} id="subTotal" onChange={handlelabelChange} />
                                    <input type="text" name="shipping" value={total.shipping} id="value" onChange={handleShippingChange} />
                                    <CloseIcon id="Cancelbtn" name="Shippingcross" style={Styles.canceltableBtn} onClick={(e) => { handleClose(e, "Shippingcross") }} />
                                </div>


                                <div className="showhiddenbtn">
                                    <div className="addbtn">
                                        <Button id="Discountbtn" style={{fontSize: "12px", display: (isDiscounttrue ? 'none' : 'flex') }} onClick={isDiscountMoniter}>
                                            <AddIcon style={{ fontSize: "10px" }} />Discount
                                        </Button>
                                    </div>
                                    <div className="addbtn">
                                        <Button id="taxbtn" style={{ fontSize: "12px",display: (isTaxtrue ? 'none' : 'flex') }} onClick={isTaxmoniter}>
                                            <AddIcon style={{ fontSize: "10px" }} />Tax
                                        </Button>
                                    </div>
                                    <div className="addbtn">
                                        <Button id="shippingbtn" style={{ fontSize: "12px", display: (isShipping ? 'none' : 'flex') }} onClick={isShippingMoniter}>
                                            <AddIcon style={{ fontSize: "10px" }} />Shipping
                                        </Button>
                                    </div>
                                    {/* <Stack direction="row" alignItems="center" gap={1}>
                                        <AddIcon style={{ fontSize: "12px" }} />
                                        <button type="button" id="Discountbtn" style={{ display: (isDiscounttrue ? 'none' : 'block') }} onClick={isDiscountMoniter}>Discount</button>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <AddIcon style={{ fontSize: "12px" }} />
                                        <button type="button" id="taxbtn" style={{ display: (isTaxtrue ? 'none' : 'block') }} onClick={isTaxmoniter}>Tax</button>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" gap={1}>
                                        <AddIcon style={{ fontSize: "12px" }} />
                                        <button type="button" id="shippingbtn" style={{ display: (isShipping ? 'none' : 'block') }} onClick={isShippingMoniter}>Shipping</button>
                                    </Stack> */}
                                </div>


                                <div className="todel" style={{ display: "flex", flexDirection: "row", marginLeft: "65px" }}>
                                    <input type="text" name="tbltotal" value={tableContent.total} id="subTotal" style={{ fontWeight: "bold", }} onChange={handlelabelChange} />
                                    <input type="text" name="total" value={total.Total} id="value" style={{ outline: "none", fontWeight: "bold", }} readOnly />
                                </div>





                                <div className="todel" style={{ display: "flex", flexDirection: "row", marginTop: 18 }}>
                                    <input type="text" name="lblamountpaid" value={tableContent.amountPaid} id="subTotal" onChange={handleDiscountlableChange} />
                                    <input type="text" name="amountpaid" value={total.amountPaid} id="Billdue" onChange={handleShippingChange} />
                                </div>
                                <div className="todel" style={{ display: "flex", flexDirection: "row" }}>
                                    <input type="text" name="lblbalancedue" value={tableContent.balancedue} id="subTotal" onChange={handlelabelChange} />
                                    <input type="text" name="balancedue" value={((total.Total) - (total.amountPaid))} id="Billdue" style={{ outline: "none" }} readOnly />
                                </div>
                            </div>
                        </Grid>
                    </Grid>



                </div >
            </Grid>
        </div >
    )
}

export default Table