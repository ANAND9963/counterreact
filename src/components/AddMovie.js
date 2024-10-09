
const AddMovie =({newMovie , handleChange,addNewMovie})=>{
 return <>
 <input value={newMovie} placeholder="Enter Movie Name " onChange={(e)=>handleChange(e) }></input>
 <button onClick={()=>addNewMovie()}>ADD</button></>
}
export default AddMovie;