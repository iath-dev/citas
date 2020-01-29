import React from 'react';
import Form from './components/form';
import Item from './components/item';

function App() {

  const dates = JSON.parse(localStorage.getItem('dates'))
  const [data, setData] = React.useState(dates || []);

  const handleAdd = item => {
    setData([ ...data, item ]);
  };

  const handleDelete = id => () => {
    const array = data.filter(item => item.id !== id)
    setData(array);
  }
 
  React.useEffect(() => {
    if (data) {
      localStorage.setItem('dates', JSON.stringify(data));
    } else {
      localStorage.setItem('dates', JSON.stringify([]));
    }
  }, [data])

  return (
    <React.Fragment>
      <h1>Administración de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form onAdd={handleAdd} />
          </div>
          <div className="one-half column">
            <h2>{data.length > 0 ? `Tienes ${data.length} citas` : 'No hay citas'}</h2>
            {data.map(item => (
              <Item data={item} key={item.id} onDelete={handleDelete(item.id)} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
