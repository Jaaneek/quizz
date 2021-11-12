import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'

const ReduxProvider = ({ children }: { children: ReactElement }): ReactElement => {
  return <Provider store={store}>{children}</Provider>
}
export default ReduxProvider
