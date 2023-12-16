import Element from "./element.js";
const GlobalApp = {
  data() {
    return {
      elements : [] 
    }
  },
  components : {
    Element:Element
  },
  template : `
    <button @click="add()">Add Element</button>
    <ul>
      <Element v-for="(element, index) in elements" 
       :key="index" :element="element"
        @remove="remove($event)" @modify="modify($event)"
      />
    </ul>
  `,
  methods : {
    add() {
      var text = "Element " + (this.elements.length + 1);
      axios.post("/list", {text:text}) 
      .then((response) => {
        this.elements.push({text:text, 
        _id:response.data.id});
      });  
    },
    remove(params) {
      var id = params.id;
      this.elements = this.elements.filter(
      function(element) {
        if (element._id == id) return false;
        else return true;
      });
    },
    modify(params) {
      var id = params.id;
      var value = params.value;
      this.elements = this.elements.map(function(element) {
        if (element._id == id) {
          element.text = value;
          return element;
        }
        else return element;
      });
    }
  }
}
export default GlobalApp;