function FirstList() {
    const city = ["Mangalore", "Udupi", "Kundapura", "Bangalore"];
    return (
        <div>
            <h1>City List:</h1>
            {
                city.map(c_name=><p key={c_name}>{c_name}</p>)
            }
        </div>
    );
}
export default FirstList; 
