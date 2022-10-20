import Porta from '../src/components/Porta/Porta';
import { Presente } from '../src/components/Presente/Presente';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Porta selecionada={true} />
      <Porta selecionada={false} />
    </div>
  );
}
