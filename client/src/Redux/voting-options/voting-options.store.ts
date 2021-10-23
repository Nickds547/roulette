import { createStore } from 'redux';
import { votingOptionsReducer } from './voting-options.reducer';

export const votingOptionsStore = createStore(votingOptionsReducer);