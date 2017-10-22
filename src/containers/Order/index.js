import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter, BrowserRouter as Router, Link } from 'react-router-dom'
import { fetchOrder } from '../../business/order/action-creators'
import Layout from '../../components/Layout'
import './Order.css'

class Order extends Component {
  state = {
    order: false
  }

  handleClickRequestOrder = () => {
    this.props.fetchData()
  }

  handleClickCreateOrder = () => {
    this.props.fetchData()
  }

  render () {
    const { order, isFetching, hasErrored } = this.props

    if (hasErrored) {
      return <p>Sorry! Loading order error.</p>
    }

    if (isFetching) {
      return <p>Chargement…</p>
    }

    return (

      <Layout>
        <div className='Order'>
          <h1>Amount ETH</h1>
          <h1>ORDER</h1>
          <div className='order'>
            <div>
              <ul>
                <li><b>AirportCode</b>: LHR</li>
                <li><b>AirlineId</b>: C9</li>
                <li><b>AirlineId</b>: BCN</li>
                <li><b>Date</b>: 2017-11-29</li>
                <li><b>Name</b>: Kronos</li>
              </ul>
              { (order != '') && <div className="result">{ order }</div> }
            </div>
            <div>
              { (order == '') && <button onClick={this.handleClickRequestOrder}>Request order</button> }
              { (order != '') && <button onClick={this.handleClickCreateOrder}>Create order</button> }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.order,
    hasErrored: state.failureOrder,
    isFetching: state.requestOrder
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: params => dispatch(fetchOrder()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order))
