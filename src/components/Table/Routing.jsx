import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Redirect, Link, NavLink, Switch, Routes } from 'react-router-dom';
import InvicePage from '../../Page/InvicePage';
import Myinvoicetem from '../Myinvoicetem';

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InvicePage />} />
                    <Route path="/MyInvoice" element={<Myinvoicetem />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}
export default Routing;
