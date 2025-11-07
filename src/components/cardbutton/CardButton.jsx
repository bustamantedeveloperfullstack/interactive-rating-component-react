import './CardButton.css'

export const CardButton = ({ number, selected, onClick }) => {
  return (
    <button
      className={`card-button ${selected ? 'selected' : ''}`.trim()}
      onClick={onClick}
    >
      {number}
    </button>
  );
};
