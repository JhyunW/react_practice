import CoreConcept from'./CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts() {
  return (
    // css에 있는 스타일을 아이디로 불러오기
    <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* map()은 배열로 자바스크립트 배열 불러오기 가능 */}
            {CORE_CONCEPTS.map((conceptItem) =>
              // 아래의 콘셉.title을 키값으로 설정
              <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
  )
}