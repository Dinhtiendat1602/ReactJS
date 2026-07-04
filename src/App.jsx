import { useState } from 'react'

import Sidebar from './Sidebar'
import Content from './Content'

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true)
  return (
    <div className="wrapper">
      <Sidebar isOpenSidebar={isOpenSidebar} />
      <Content
        // isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    </div>
  )
}

export default App
