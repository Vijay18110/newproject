import React from "react";
import Header from "../../components/header";

const Public = ({ elements }) => {
    return <main>
        <Header></Header>
        {elements}
    </main>;
};

export default Public;
