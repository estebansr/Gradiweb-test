import * as css from './index.css'
import {getData} from "../../helpers/services"

export default class App {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
      let dataList = getData()
      console.log(dataList)
    }

    render () {
        //if (this.elem) this.elem.innerHTML = `
        //<section data-component="app">
        //<h1>App Component</h1>  
        //<p>The time is: ${(new Date()).toLocaleString()}</p>
        //</section>
        //`
        
    }
}