let Video=({url})=>{
    return(
        <video src={url} width={"100%"} height={"100%"} autoPlay loop style={{position:'absolute',zIndex:-20,top:0,left:0,width:"100%",height:"100%",objectFit:"cover",backgroundColor:"black"}}></video>
    )
}
export default Video