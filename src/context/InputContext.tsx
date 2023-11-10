import { createContext, Dispatch, SetStateAction } from 'react';

interface InputContextProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const InputContext = createContext<InputContextProps>({
  inputValue: '',
  setInputValue: () => {},
});

export default InputContext;
