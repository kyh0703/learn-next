import { useState, useEffect } from 'react';

function SayHello() {
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return <div>hello{data.name}</div>;
}

export default SayHello;
