import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TabList from './component/TabList';
import Body from './component/Body';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Tab_Id: 1,
      show: false
    }
    this.vh = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                    document.documentElement.clientHeight, document.documentElement.scrollHeight, 
                    document.documentElement.offsetHeight);
    this.changetab = (id) => {
      this.setState({
        Tab_Id: id
      })
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.toTop = this.toTop.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
      if (window.scrollY / this.vh >= 0.25) {
          this.setState({
              show: true
          })
      } else {
          this.setState({
              show: false
          })
      }
  }

  toTop() {
    window.scrollTo(0,0)
  }

  render() {
    const tabs = [{
      id: 1,
      title: 'Text'
    },
    {
      id: 2,
      title: 'Image'
    },
    {
      id: 3,
      title: 'Video'
    },
    {
      id: 4,
      title: 'Table'
    },
    {
      id: 5,
      title: 'Email'
    }]

    return (
      <div className="App">
        <h1>App</h1>
        <nav>
          <ul className="nav-bar">
            <TabList tabs={tabs} ctab={this.changetab} active={this.state.Tab_Id}/>
          </ul>
          </nav>
        <div className="main-body">
          <Body active={this.state.Tab_Id}/>
        </div>
        <button type="button" id="to-top" disabled={!this.state.show}
          style={{display:this.state.show ? 'block' : 'none'}} onClick={this.toTop}>Back to top</button>
      </div>
      
    );
  }
}

export default App;
