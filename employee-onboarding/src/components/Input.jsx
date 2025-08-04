function Input({ label, name, value, onChange, type = "text", error }) {
  return (
    <div>
      <label>{label}</label><br />
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Input;