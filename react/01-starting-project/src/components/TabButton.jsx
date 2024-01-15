// children 은 <TabButton>글자<TabButton> 의 '글자'가 children으로 전달
export default function TabButton({children, isSelected, ...props}) {
  return (
    <li>
      {/* 함수를 실행시키는게 아닌 값을 가져오고싶기에 ()는 넣지 않는다 */}
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
        </button>
    </li>
  );
}