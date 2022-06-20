

import React from "react";

function Footer() {
    var date = new Date();
    date = date.getFullYear()
    return (
        <footer>
            <p>Copyright Amritanshu { date}</p>
        </footer>
        
    );
}
export default Footer;