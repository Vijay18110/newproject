import React from "react";
import Container from "../../ui/Container";
import Container_2 from "../../ui/Container/Contner_2";
import styles from "./index.module.css";
import BG_Banner from "../../components/BG_Banner";
import InvoiceMiniComp from "../../shared/InvoiveMiniComp";

const Invoice = () => {
  return (
    <>
      <Container>
        <Container_2>
          <div className={styles.invoiceCont}>
            <div className={styles.inerrCont}>
              <div className={styles.inoviceHeader}>
                {/* Bg_Banner Add  */}
                <BG_Banner />
              </div>
              <div className={styles.topCont}>
                <div className={styles.contentLeft}>
                  <InvoiceMiniComp
                    Uname1="Invoice To"
                    Uname2="AliThemes Pty Ltd"
                    Uname3="contactalithemes.comPO Box 16122, Collins Street West,Australia"
                  />
                  <InvoiceMiniComp
                    Uname1="Due Date:"
                    Uname3="30 November 2024"
                  />
                </div>
                <div className={styles.contentRight}>
                  <InvoiceMiniComp
                    Uname1="Bill To"
                    Uname2="NestMart Inc"
                    Uname3="billing@NestMart.com205 North Michigan Avenue,Suite 810 Chicago, 60601, USA"
                  />
                  <InvoiceMiniComp
                    Uname1="Payment Method"
                    Uname3="Via Paypal"
                  />
                </div>
              </div>
              <div className={styles.centerCont}>
                <table className={styles.table}>
                  <thead className={styles.bg_active}>
                    <tr>
                      <th>Item name</th>
                      <th className={styles.center_text}> Unit Price</th>
                      <th className={styles.center_text}>Quantity</th>
                      <th className={styles.right_text}>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Field Roast Chao Cheese Creamy Original SKU: FWM15VKT
                      </td>
                      <td>$10.99</td>
                      <td>1</td>
                      <td>$10.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.botCont}>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, mollitia! */}
              </div>
            </div>
          </div>
        </Container_2>
      </Container>
    </>
  );
};

export default Invoice;
