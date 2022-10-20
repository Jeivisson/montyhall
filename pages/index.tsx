import React from 'react';
import { useState  } from 'react';
import Porta from '../src/components/Porta/Porta';
import { Presente } from '../src/components/Presente/Presente';
import PortaModel from '../src/model/porta';

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />
    </div>
  );
}
