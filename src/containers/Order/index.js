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

  componentDidMount = () => {
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
          <h1>Order</h1>
          <button>Order</button>
          <button>Accept order</button>
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
