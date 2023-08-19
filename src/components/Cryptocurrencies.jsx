import React, { useState, useEffect } from 'react'
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi"

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  // console.log(cryptos)

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData)


  }, [cryptoList, searchTerm])


  if (isFetching) return 'Loading...';
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}

      <div className="cryptos-page">
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" width="30rem" height="30rem" src={currency.iconUrl} />}
                hoverable
              >

                <p>Price: {millify(currency.price)}</p>
                <p>Market cap: {millify(currency.marketcap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>

            </Link>
          </Col>
        ))}

      </Row>
      </div>
    </>
  )
}

export default Cryptocurrencies