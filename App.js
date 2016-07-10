import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
         data:[
          {
            user:"sairam",
            msg:"Hi"
          },
        ]
      }
      this.state.addMsg=addMsg.bind(this);
      function addMsg(event)
       {
        console.log('add msg');
        if(event.key=='Enter')
        {
        console.log(document.getElementById('chatBox').value);
        this.state.data.push(
        {user:"sairam",
         msg:document.getElementById('chatBox').value,
        });
        document.getElementById('chatBox').value='';
        this.forceUpdate();
        console.log(this.state.data.map((val)=>(val.user,val.msg)));
      }
       }
      }
      
   render() {
      return (
         <div>
            {this.state.data.map((value,index)=>(<div key={index}>{value.user}:{value.msg}</div>))}
            <input id="chatBox" onKeyDown={this.state.addMsg}></input>
         </div>
      );
      
  }

}
export default App;