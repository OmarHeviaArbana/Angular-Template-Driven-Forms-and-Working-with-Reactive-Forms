# Ejercicio 1 – Preguntas teóricas sobre formularios Angular

## a) ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

- Los formularios basados ​​en plantillas utilizan el “FormsModule”, mientras que los formularios reactivos se basan en “ReactiveFormsModule” FormControl, FormGroup y FormArray.

- En los formularios basados en plantilla las validaciones se realizan utilizando directivas integradas en Angular y de forma más rígida. En los formularios reactivos podemos crear validaciones personalizdas.

- En un enfoque basado en plantillas, la mayor parte de la lógica se basa en la plantilla, mientras que en el enfoque basado en reactivos, la lógica reside principalmente en el componente .

- Los formularios basdados en plantillas son más simples y adecuados para formularios básicos, mientras que los formularios reactivos ofrecen un mayor control y son más adecuados para formularios complejos.

## b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

### **ngModel**

```text
[ngModel]="stock"
```

Es una directiva que nos permite la comunicación y el binding entre elementos de un formulario y las propiedades del componente TS. Esto es la sincronización de los parametros que permiten que los cambios en el formulario se reflejen en la data del componente. Suele ir asociado a elementos de un formulario como un input.

### **ngModelChange**

```text
(ngModelChange)="functionStock()
```

En lugar de una directiva es un evento que se actuva cuando el valor del ngModel varía. Con ello podemos ejecutar funciones de nuestro interés. Para ello solo es necesario indicar el nombre de la función.

```text
<div class="form-group">
  <form>
    <div class="stock-name">
      <input type="text"
             placeholder="Stock Name"
             name="stockName"
             [ngModel]="stock"
             (ngModelChange)="functionStock()">
    </div>
  </form>
  <button (click)="stock.name='test'">Reset stock name</button>
</div>
```

## c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

Las validaciones de formularios por plantilla se basa principalmente en la validación nativa de los formularios HTML. Esto puede ser util en caso de que se pudiera utilizar en nuestro formulario. En todo caso, Angular integra  nuevos estados de control y validaciones ngModel y ngForm. 

Los **estados de control** nos indica el estado de control del formulario mediantel a directiva ngModel cambia y agrega clases CSS al elemento en el que se encuentra, según la interacción del usuario: 

- **Visited:** si el usuario ha visitado el elemento aplica clases predeterminadas de CSS ng-touched(true) o ng-untouched(false).

- **Changed:** si el usuario ha modificado el valor del elemento aplica clases predeterminadas de CSS ng-dirty(true) o ng-pristine(false).

- **Valid**: si el valor del elemento del formulario es valido en base a validaciones, aplica clases predeterminadas de CSS ng-valid(true) o ng-invalid(false).


**Form module** es el encargado de realizar las comprobaciones para aplicar los estados de control en el formularia de forma autonoma. Lo único que tenemos que hacer es personalizar la aplicación del css como el siguiente ejemplo:

```text
.stock-name .ng-valid,
.stock-code .ng-pristine,
.stock-price .ng-untouched {
  background-color: green;
}

.stock-name .ng-invalid,
.stock-code .ng-dirty,
.stock-price .ng-touched {
  background-color: pink;
}
```

## d) ¿Qué ventajas aportan los FormGroup en la composición de formularios?

**¿Qué es un FormGroup?**

FormGroup es un cojunto de FormControls, el estado de este objeto depende del estado de todos sus objetos, es decir, si uno de los FormControl es inválido, el grupo entero es inválido. 

```text
// En el template

<form novalidate [formGroup]="group">
  Name: <input type="text" formControlName="name" /> Location:
  <input type="text" formControlName="location" />
</form>

// Control en el componente

const form = new FormGroup({
  first: new FormControl("Nancy", Validators.minLength(2)),
  last: new FormControl("Drew"),
});
```

**Ventajas de los FormGroup**

- Agrupación de campos de un formulario en base a una agrupación lógica dde nuestro interés.

- Los FormGroup se integran fácilmente con las directivas de Angular, como ngModel y ngForm, asi como con los estados de control del formulario.

- Aplicar validadores a nivel de grupo utilizando Validators.compose() o Validators.composeAsync(). (Si queremos añadir más de un validador, lo podemos hacer mediante un array de validadores, por ejemplo).

- Los FormGroup proporcionan métodos para acceder fácilmente a los valores de todos los campos dentro del grupo

- Los FormGroup permiten testear grupos específicos de campos dentro de un formulario, lo que simplifica las pruebas unitarias y de integración.
