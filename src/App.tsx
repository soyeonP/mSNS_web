import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import mapService from './services/map-service';
import './App.css';

interface AppState{
  loading : boolean;
}

export interface IMapAPI {
  save: (title: string) => Promise<void>;
  getAll: () => Promise<void>; 
  remove: (id: number) => Promise<void>; 
  toggle: (id: number, completed: boolean) => Promise<void>;
};

class App extends React.Component<{},AppState> {
  constructor(props: any){
    super(props);
    this.state = {
      loading : false
    };
  }

  get mapAPI(){
    return{
      save: this.saveArticle.bind(this),
      getAll: this.fetchArticles.bind(this),
      remove: this.removeArticle.bind(this),
      toggle: this.toggleArticle.bind(this),
    }
  }

  componentDidMount(){
      this.fetchArticles();

  }

  saveArticle = (title: string)=> {
    
  }

  toggleArticle = (id: number)=> {
  
  }

  removeArticle = (id: number)=> {
    
  }

  fetchArticles = ()=> {
    
  }

  public render(){
    return (
      <div className="map-app">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;

