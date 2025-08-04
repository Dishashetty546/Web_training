function Dropdown({ label, name, value, onChange, options, error }) {
  return (
    <div>
      <label>{label}</label><br />
      <select name={name} value={value} onChange={onChange}>
        <option value="">--Select--</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default Dropdown;