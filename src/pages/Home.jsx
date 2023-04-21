import Filters from "../components/Filters";
import Tour from "../components/Tour";
import {useState, useEffect} from 'react';
function Home() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        console.log('useeffect');
        fetch("https://64381f19f3a0c40814ab6315.mockapi.io/tours")
        .then((response) => response.json())
        .then(res => setTours(res));
    }, []); // пустой массив означает, что функция выполняется только в загрузку 

    console.log("rerender");
    // асинхронно
    
    //

    return (
        <main>
        <div className="container">
          <h2>КАТАЛОГ ТУРОВ</h2>
          <Filters
            categories={["все", "по россии", "горящие"]}
            activeIndex={0}
          />

          <section className="tours">
            <div style={{ marginTop: "3rem" }}>
              {tours.map((t) => (
                <Tour key={t.id} {...t} />
              ))}
            </div>
          </section>
        </div>
      </main>
    );
}

export default Home;