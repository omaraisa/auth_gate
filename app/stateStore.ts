'use server';

import { create } from 'zustand';

interface State {
    username: string;
    password: string;
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
}

const useStore = create<State>((set) => ({
    username: '',
    password: '',
    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
}));

export default useStore;
