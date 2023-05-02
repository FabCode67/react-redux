import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer( props ) {
  return (
    <div style={{border: "1px solid white", backgroundColor:"mediumblue", color:"white", borderRadius:"3rem", height:"20rem", width:"20rem", margin:"auto", alignItems:"center", justifyContent:"center", justifySelf:"center", marginTop:"%", textAlign:"center", paddingTop:"7rem"}}>
        <h2>Number of cakes - {props.numOfCakes} </h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)