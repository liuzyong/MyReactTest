import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {

  function getDomian() {
    // 返回所使用的 web 协议，如：http:
    var protocol = window.location.protocol;
    // 返回 web 主机的端口，如：8080
    var port = window.location.port;
    var domian = window.location.protocol + "//" + window.location.hostname; // 
    console.log(domian);
    alert(domain)
    return domian;
  }

  return (
    <div>
      <h1> Hello React111122221 </h1>
      <button onClick ={getDomian}>获取domain</button>
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App />
  </div>,
  document.getElementById('root')
);

export default App;