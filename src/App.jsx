import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import  cardData  from './data';

export default function App() {
  return (
    <main>
      <Header />
      <div>
        {
          cardData.map((card) => {
            return (
            <div>
            <Card 
              id={card.id}
              imageUrl={card.imageUrl}
              location={card.location}
              title = {card.title}
              dateRange = {card.dateRange}
              description = {card.description}
            />
              <hr />
            </div>
            )
          })
        }
      </div>
    </main>
  )
}
