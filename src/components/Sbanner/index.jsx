import React from "react";
import Banner from "../Banner";
import Container from "../container";

const Sbanner = ({ data, width }) => {
    return <Container>
        <Banner height="300px" width={width} data={data} />
    </Container>;
};

export default Sbanner;
