import './ArtCompetitionForm.css';
const ArtCompetitionForm=()=>{
    const handlesubmit=(event)=>{
        
    
    const formData={
        Name: event.target.name.value,
        Age: event.target.age.value,
        Artworkdescription: event.target.artworkdescription.value,
    };
    console.log(formData);
    event.preventDefault();
    event.target.name.value="";
    event.target.age.value="";
    event.target.artworkdescription.value=""

    //alert("clicked");

        
    };
    //const handlechange=(event)=>{
       // console.log(event.target.value,"Id")
      

    //} 
    return(
        <div className="art-competition-form-container">
            
            <h1>ArtCompetitionForm</h1>
            <form onSubmit={handlesubmit}>
            <label>Name:</label> 
            <input type="text" name="name" required/>
            <label>Age:</label>
            <input type="number" name="age" required/>
            <label>ArtWorkDescription:</label>
            <textarea name="artworkdescription" required/>
            <button type="submit">submit</button>
            </form>
            
        </div>
    )
}
export default ArtCompetitionForm;