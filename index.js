class MiEtiqueta extends HTMLElement { //Creamos una clase la extendemos de HTMLElement
     constructor(){
         super();  // Super es usada para acceder y llamar funciones del padre de un objeto
         this.attachShadow({mode: 'open'}); // encapsula los estilos del CSS
         this.render();
    }
    get style() {  // hacemos un getter se style para que se una propiedad y la pasamos a estatica para no tener que instanciar la clase
        return `
        h1{
            color: peru
           
        }
        div{
            text-align: center;
            padding: 50px;
            margin-top: 30vh;
        }`  
    };

    AddText(text) {
        const h1 = this.shadowRoot.querySelector('h1') // .shadowRoot.querySelector('h1') accedemos al la etiqueta h1
        h1.textContent = text // añadimos el texto al textContent del H1
    }


    render() {  // accedemos shadowRoot.innerHTML de window
        this.shadowRoot.innerHTML = `  
        <style>${MiEtiqueta.style}</style>
        <div>
        <h1></h1>
        </div>`
    };
}
   
customElements.define('mi-etiqueta', MiEtiqueta)  // asiganamos la etiqueta 'mi-etiqueta 'a nuestra calse MiEtiqueta
const webComponet = document.querySelector('mi-etiqueta') //acedemos a nuestra clase
webComponet.AddText('Soy un Web Component') // Usamos el metodo addText de nuestra clase para asar un texto como argumento