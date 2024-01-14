import { useState } from 'react'

import TabButton from './TabButton'
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
  // 컴포넌트 함수의 최 상위에 호출되어야 함.
  // 셀렉트 토픽이 컴포넌트를 실행할때마다 생성됨.
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Pleass select a topic!</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        {/* 버튼을 누르면 handleSelector 펑션을 실행한다 는 화살표 */}
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>
      {/* 아래를 해석하면 선택된 topic이 없다면 p태그를 선택을 하면 숨김 */}
      {/* {!selectedTopic ? <p>Please select a topic.</p> : null}  */}
      {/* {slelectedTopic !== undefined}  로도 표현가능*/}
      {tabContent}
    </Section>
  );
}