
import Context from './context.factory';

export interface HeaderStore {
  title: string;
}

export const initialHeaderState: HeaderStore = {
  title: 'Asset Dashboard'
};

const HeaderContext = new Context(initialHeaderState);

export default HeaderContext;