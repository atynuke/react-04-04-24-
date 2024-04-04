const Child =()=> {
    let status =false;
    return (props)=>{
        return(
            <>
           
          <h1>Welcome {props.name}</h1>
            <p>This is Child Component  </p>
            </>
        )
      }
    
    
    }
    export default Child