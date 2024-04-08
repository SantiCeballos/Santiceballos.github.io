export default function TabButton({ children, onSelect, isSelected = false }) {
  function handleClick() {
    console.log("Hello world!");
  }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
