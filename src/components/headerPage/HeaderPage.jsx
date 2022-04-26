import React from "react";
import Calender from "../Calender";
import "../headerPage/Head.css";
import LogoInsert from "../ImageUpload/logoInsert";
import Grid from '@mui/material/Grid';

const HeadPage = (props) => {
    const content = props.content

    const handleChange = (ent) => {
        const name = ent.target.name
        const value = ent.target.value;
        props.methods(name, value)
    }
    return (

        <div id="parentDiv">
            <Grid container columns={{ xs: 6, md: 12 }}>
                <Grid item xs={6}>
                    <div id="leftdiv">
                        <LogoInsert />
                        <div id="leftdivBillingSide">
                            <input type="text" name="billFrom" id="header" value={content.billFrom} onChange={handleChange} />
                            <input type="text" placeholder="" id="leftdivBillingSideInputfield"></input>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div id="rightdiv">
                        <div id="rightdivForm">
                            <input type="text" value={content.invoice} id="rightdivLableField" name="invoice" onChange={handleChange} />
                            <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                            <div class="text-container">
                                <span id="clearBtn1" class="clearBtn">#</span>
                                <input type="text" id="inputField" />
                            </div>
                        </div>


                        <div id="rightdivForm">
                            <input type="text" name="date" value={content.date} id="rightdivLableField" onChange={handleChange} />
                            <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                            <Calender />

                        </div>


                        <div id="rightdivForm">
                            <input type="text" name="dueDate" value={content.dueDate} id="rightdivLableField" onChange={handleChange} />
                            <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                            <Calender />
                        </div>


                        <div id="rightdivForm">
                            <input type="text" name="paymentTerms" value={content.paymentTerms} id="rightdivLableField" onChange={handleChange} />
                            <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                            <input type="text" id="inputField" />
                        </div>


                        <div id="rightdivForm">
                            <input type="text" name="poNumber" value={content.poNumber} id="rightdivLableField" onChange={handleChange} />
                            <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                            <input type="text" id="inputField" />
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* <div id="rightdiv">
                right
                <div id="rightdivForm">
                    <input type="text" value={content.invoice} id="rightdivLableField" name="invoice" onChange={handleChange} />
                    <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                    <input type="text" id="inputField" />
                </div>


                <div id="rightdivForm">
                    <input type="text" name="date" value={content.date} id="rightdivLableField" onChange={handleChange} />
                    <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                    <Calender />

                </div>


                <div id="rightdivForm">
                    <input type="text" name="dueDate" value={content.dueDate} id="rightdivLableField" onChange={handleChange} />
                    <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                    <Calender />
                </div>


                <div id="rightdivForm">
                    <input type="text" name="paymentTerms" value={content.paymentTerms} id="rightdivLableField" onChange={handleChange} />
                    <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                    <input type="text" id="inputField" />
                </div>


                <div id="rightdivForm">
                    <input type="text" name="poNumber" value={content.poNumber} id="rightdivLableField" onChange={handleChange} />
                    <h5 style={{ margin: 0, marginTop: "4px" }}>:</h5>
                    <input type="text" value={""} id="inputField" />
                </div>

            </div> */}


            {/* <div id="leftdiv">
                left
                {/* <LogoInsert />
                <div id="leftdivBillingSide">
                    <input type="text" name="billFrom" id="header" value={content.billFrom} onChange={handleChange} />
                    <input type="text" placeholder="" id="leftdivBillingSideInputfield" />
                </div> */}
            {/* </div> */}

        </div >
    )
}

export default HeadPage