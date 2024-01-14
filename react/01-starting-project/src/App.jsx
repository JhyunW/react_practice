import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
function App() {

  return (
    // div등의 태그로 감싸는걸 생략해줌
    // fragment를 <>로 사용가능
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
