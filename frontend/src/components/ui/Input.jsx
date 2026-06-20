/**
 * Input Component
 * Props: label, placeholder
 */

function Input({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border p-2 w-full"
      />
    </div>
  );
}

export default Input;