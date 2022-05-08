import React from "react";
import { useContext } from "react";
import { Universal } from "./global";
import Layout from "./Layout";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";


const AddedCart = () => {
  const { val, setVal } = useContext(Universal);

  let navigate=useNavigate()
  let add = [],
    total;

  val.map(({ price, item }) => {
    add.push(Number(price * item));
    total = add.reduce((a, b) => a + b);
  });
  let loading = val === null;
  let paystackvalue = total * 100;

  

  const PaystackpublicKey = `pk_test_a3644451a29f162a0a8935c07dbe376382a99be1`;

  const config = {
    reference: new Date().getTime().toString(),
    email: "afobaje@gmail.com",
    amount: paystackvalue,
    publicKey: PaystackpublicKey,
  };

  const onSuccess = (reference) => {
    console.log(reference.status);
    if (reference.status === "success") {
      setVal([]);
      navigate(`/Sales`)
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handler = () => {
    if (total == 0) {
      return;
    } else if (total > 0) {
      initializePayment(onSuccess);
      console.log(Number(total));
    }
  };

  return (
    <Layout>
      <div>
        {loading ? (
          "loading..."
        ) : (
          <div
            className="item-container"
            style={{
              display: "flex",
            }}
          >
            <div
              className="qw"
              style={{
                display: "flex",
                flexDirection: "column",
                placeContent: "center center",
                alignItems: "start",
                width: "75%",
                paddingLeft: "5em",
              }}
            >
              <h3 style={{}}>Cart({val.length})</h3>
              <div
                className="desc"
                style={{
                  display: "flex",
                  width: "85%",
                  padding: ".5em",
                  flexDirection: "column",
                }}
              >
                {val.map(({ id, img, name, price, item }) => {
                  return (
                    <div
                      key={id}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        borderTop: "1px solid #ededed",
                        width: "85%",
                        padding: ".5em",
                        placeContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          width: "10em",
                          height: "10em",
                          objectFit: "cover",
                          padding: ".7em",
                        }}
                      >
                        <img
                          src={img}
                          alt={name}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "15px",
                          }}
                        />
                      </div>

                      <span>{name}</span>
                      <span
                        style={{
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                      >
                        ₦{new Intl.NumberFormat().format(price)} ({item})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="cart-summary"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "25%",
                padding: "2em",
              }}
            >
              <h4>CART SUMMARY</h4>
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px solid #ededed",
                }}
              >
                {/* <PaystackHook /> */}
                <h5>Total</h5>{" "}
                <h3>₦{new Intl.NumberFormat().format(total || 0)}</h3>
              </span>
              <hr
                style={{
                  color: "#ededed",
                  border: "1px solid #ededed",
                }}
              />
              <button
                style={{
                  fontWeight: "700",
                  fontSize: "13px",
                  cursor: "pointer",
                  padding: ".7em",
                  backgroundColor: "#a9dee3",
                  border: "1px solid #a9dee3",
                  borderRadius: "5px",
                }}
                onClick={() => handler()}
              >
                CHECKOUT (₦{new Intl.NumberFormat().format(total || 0)})
              </button>
            </div>
          </div>
        )}
      </div>
      
    </Layout>
  );
};

export default AddedCart;








