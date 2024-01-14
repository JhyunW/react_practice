export default function TabButton({children, onSelect, isSelected}) {
  return (
    <li>
      {/* 함수를 실행시키는게 아닌 값을 가져오고싶기에 ()는 넣지 않는다 */}
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}