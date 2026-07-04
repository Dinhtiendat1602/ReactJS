function Sidebar(props) {
  return (
    <div
      className="sidebar"
      style={{
        width: props.isOpenSidebar ? '300px' : '0',
      }}
    >
      Sidebar
    </div>
  )
}

export default Sidebar
