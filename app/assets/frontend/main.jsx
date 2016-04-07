class Main extends React.Component {
  render() {
    return(
      <div>
        <h1> I'm inside a DOM react component!</h1>
    </div>
    )
  }
}


let documentReady = () => {
  ReactDOM.render(<Main />, document.getElementById("react"))
}

$(documentReady);
