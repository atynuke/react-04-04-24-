

const Master = (Child) => {

    const properties ={
        name: "Subomi",
        value: "Aishat",
        status: true,
    }

return ()=>{
    const {name, value, status} = properties;
    return(
        <>
        {status == true ? 
        <div>Welcome {name}, {value} <Child {...properties}/></div>: 
        <p>Wahala! Wahala!! Status is False</p>}
        </>
    )
  }


}



  export default Master