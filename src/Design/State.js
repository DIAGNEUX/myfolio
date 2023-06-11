import { proxy } from 'valtio';

const state = proxy({
  // Autres propriétés du state...
  pointer: {
    x: 0,
    y: 0,
  },
});

export default state;
