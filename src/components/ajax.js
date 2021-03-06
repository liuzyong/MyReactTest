import * as React from 'react'
// import * as ReacrDOM from 'react-dom'

export default class AjaxTest extends React.Component {

  state ={
    name:'',
    url:''
  }
  componentDidMount(){
    const requestUrl=`https://api.github.com/search/repositories?q=re&sort=stars`;
    fetch(requestUrl)
      .then(reponse =>{
        return reponse.json();
      })
      .then(data =>{
        console.log(data.items[0])
        this.setState({
          name:data.items[0].name,
          url:data.items[0].html_url
        })
      })
  }

  render(){
    const {name ,url } = this.state
    let content =''
    if(name === ''){
      content =`Loading `
    }else{
      content = `the most stars Repo `
    }
    return(
      <div>
      
      <h2> AjaxTest: {content}<a href={url}>{name}</a></h2>
      </div>
    )
  }
}