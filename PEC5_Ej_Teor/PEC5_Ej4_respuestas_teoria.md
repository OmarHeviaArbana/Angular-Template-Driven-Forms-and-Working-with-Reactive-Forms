# Ejercicio 4 – Preguntas teóricas sobre formularios reactivos Angular

## **1. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?**

### **FormControl**

Es el núcleo de cualquier formulario reactivo. Representa directamente un elemento individual del formulario. Cualquier formulario reactivo no es más que un conjunto de FormControls agrupados y es a nivel de FormControl donde asignamos valores iniciales y validadores.

```text
import { FormControl } from '@angular/forms';

/// Creación del FormControl
    const name = new FormControl('');

// Acceder al valor del Form Control

    get name() {
        return name.value;
    }
```

### **FormGroup**

Generalmente, cuando construimos un formulario, tenemos un conjunto de diferentes campos y elementos que queremos rastrear. En estos casos, el FormGroup es útil como una forma de agrupar campos de formulario  bajo un mismo grupo. Gracias a ello, podemos obtener el valor completo del formulario o verificar si el formulario en su totalidad es válido (como resultado de los elementos individuales y su estado). Por lo que podríamos afirmar que FormGroup es una colección de *FormControles* que permite gestionar un grupo de controles de formulario como una unidad.


```text
import { FormGroup, FormControl } from '@angular/forms';

// Creación del FormGroup con sus FormControl

    const article = new FormGroup({
      name: new FormControl('')
      price: new FormControl('')
      imageUrl: new FormControl('')
      onSale: new FormControl(false)
    });
    
//Acceder a un valor concreto del formulario 

    get name() {
        return this.article.get('name');
    }
```

### **FormBuilder**

Aunque el FormGroup nos da la flexibilidad de construir formularios complejos y anidados, su sintaxis es un poco larga. Es por eso que, como alternativa,tenemos el FormBuilder en Angular.

Gracias a FormBuilder, Angular nos permite crear rápidamente elementos de *FormGroup y FormControl* sin tener que llamar manualmente a new para cada uno de ellos. Por todo ello, FormBuilder proporciona métodos  para crear instancias de *FormControl y FormGroup* y nos ayuda a simplifica la sintaxis de creación y configuración de formularios.

```text

// Importaciones para la utilización del Formbuilder, FormGroup y las Validaciones

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Inyectar Formbuilder para la formación de Form Group

constructor(private fb: FormBuilder) {
    this.article = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\/[a-zA-Z0-9.-]+)*\/?[a-zA-Z0-9.-]+\.(jpg|jpeg|png|gif)$/)]],
      onSale: [false]
    });

// Acceder a un valor concreto del formulario 

     get name() {
        return this.article.get('name');
    }
```

## **2. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.**

| Estado       | CSS class si True | CSS class si False | Explicación |
|--------------|-------------------|--------------------|--------------
| Visited      | ng-touched        | ng-untouched       | **Touched:** Indica que el control ha sido enfocado y desenfocado (es decir, el usuario ha interactuado con él). **Untouched:** Indica que el control nunca ha sido enfocado.
| Changed      | ng-dirty          | ng-pristine        | **Pristine**: Indica que el control no ha sido modificado desde que se cargó. **Dirty:** Indica que el control ha sido modificado por el usuario.
| Valid        | ng-valid          | ng-invalid         | **Valid:** Indica que el control ha pasado todas las validaciones. **Invalid:** Indica que el control no ha pasado una o más validaciones.  


## **3. ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?**

Para manejar el estado y la validez del control del formulario reactivo es bastante similar a cómo lo manejamos con formularios basados en plantillas. Lo que cambia es el método de acceso a estas propiedades ya que en los formularios reactivos entran juego los estados de control. Estos estados son propiedades que reflejan la condición actual de los controles del formulario y, para ello, utiliza mensajes de error junto a cada campo. 