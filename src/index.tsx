import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import storeProvider from './mst/stores/StoreProvider';
import reportWebVitals from './reportWebVitals';
import { IRootStore } from './interfaces/interfaces';
import { AuthWrapper } from './hooks/useAuth';


const StoreContext = React.createContext<IRootStore|any>(null)

export const useRootStore=() => React.useContext(StoreContext)

const StoreProvider = ({children}: { children: ReactElement }) => {
  return (
    <StoreContext.Provider value={storeProvider}>
      {children}
    </StoreContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AuthWrapper>
      <StoreProvider>
         <App />
      </StoreProvider>
    </AuthWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
