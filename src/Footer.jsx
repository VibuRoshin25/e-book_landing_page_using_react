import React from "react";

function Footer(){
    var DATE = new Date();
    return(
        <div>
            <footer>
                <p>©{DATE.getFullYear()}</p>
            </footer>
        </div>);
}

export default Footer;