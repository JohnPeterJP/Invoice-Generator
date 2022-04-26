import React from "react";
import { useState } from "react";
import "../ImageUpload/LogoInsert.css"
import { styles } from "../../Styles/Button.js";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const LogoInsert =()=>{

    const [logo, setlogo]= useState(
        {profilePic: null, logoInserted: false}
    )

    const handleUploadImage =(ent)=>{
        let file = ent.target.files[0]
        let reader = new FileReader()
        let url = reader.readAsDataURL(file)

        reader.onloadend = function(e){
            setlogo({...logo, profilePic: [reader.result], logoInserted: true})
        }
    }
    const handleCancel =()=>{
        setlogo({profilePic: null, logoInserted: false})
    }

    return(
        <div id="Logo">
            {
                logo.logoInserted?
                    <div id="trueLogoPic">
                        <img src={logo.profilePic} alt="" id="LogoPic"/>
                        <CancelOutlinedIcon style={styles.cancelBtn} onClick={handleCancel}/>
                    </div>:
                        <Button variant="text" style={styles.addProfile}>
                            <AddIcon/>Add Logo
                            <input id="addLogo" style={{opacity: 0}} type="file" accept="image/*" Button={"None"} onChange={handleUploadImage}/>
                        </Button>
            }
        </div>
    )
}

export default LogoInsert