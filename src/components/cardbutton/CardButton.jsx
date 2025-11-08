import './CardButton.css'

export const CardButton = ({ number, selected, onClick }) => {
  return (
    <button
      className={`button ${selected ? 'selected' : ''}`.trim()}
      onClick={onClick}
    >
      {number}
    </button>
  );
};
