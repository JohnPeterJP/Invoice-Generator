import React from "react";
import Basetable from "../Basetable";
import "../BillHead/BillHeader.css";
import Table from "../Table/Table";
import Grid from '@mui/material/Grid';


const BillingHeader = (props) => {

    const labelContent = props.content

    const handleParentMethod = props.methods

    return (
        <><div id="parentdiv">
            {/* <Grid  style={{ backgroundColor: 'white' }}> */}
                <Grid container item xs={12} direction="column" >
                    <div id="shipingDetials">
                        <Grid container columns={{ xs: 6, md: 12 }}>
                            <Grid item xs={6}>
                                <div id="shipingDetialsBillTo">
                                    <h5 >{labelContent.billTo}</h5>
                                    <input type="text" id="shipingDetialsBilTxtfield" />
                                </div>
                            </Grid>
                            <Grid item xs={6}style={{  alignContent: "space-around",justifyContent: "space-between",}}>
                                <div id="shipingDetialsshipTo">
                                    <h5>{labelContent.shipTo}</h5>
                                    <input type="text" id="shipingDetialsBilTxtfield" />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                {/* <Grid container item xs={12} direction="column" > */}    {/* </Grid> */}
            {/* </Grid > */}
            <Table content={labelContent} methods={handleParentMethod} />

        </div >

        </>
        // <div id="parentdiv">

        //     {/* <Basetable content={labelContent} methods={handleParentMethod} /> */}
        //     {/* <BiilingTable content={labelContent} methods={handleParentMethod}/> */}
        // </div>
    )
}

export default BillingHeader