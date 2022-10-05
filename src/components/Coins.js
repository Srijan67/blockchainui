import React, { useEffect, useState } from "react";
import "../styles/coins.css";
import { allCoinsAction } from "../utils/action";
import millify from "millify";
import { BallTriangle } from "react-loader-spinner";
const Coins = () => {
  const [allCoinsData, setAllCoinsData] = useState();
  const [load, setLoad] = useState(false);
  const allCoins = async () => {
    setLoad(true);
    const { data } = await allCoinsAction();
    setLoad(false);

    console.log(data, "this is data");
    setAllCoinsData(data.coins);
  };
  useEffect(() => {
    allCoins();
  }, []);
  return (
    <div className="container">
      {load ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#fff"
          ariaLabel="ball-triangle-loading"
          wrapperClass={"loaderStyle"}
          wrapperStyle=""
          visible={load}
        />
      ) : (
        <>
          {allCoinsData &&
            allCoinsData.map((val, index) => {
              let price = millify(val.price, {
                precision: 2,
                lowercase: false,
              });
              // 1.024m;
              return (
                <div className="singleCoin" key={index}>
                  <img
                    className="cryptoLogo"
                    src={val.iconUrl}
                    alt={"Crypto Logo"}
                  />
                  <h3>{val.name}</h3>
                  <div className="details">
                    <div className="price">{price}</div>
                    <div className="symbol">({val.symbol})</div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Coins;
