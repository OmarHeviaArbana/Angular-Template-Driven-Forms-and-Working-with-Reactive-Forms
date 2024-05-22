# **Desarrollo front-end con framew. JavaScript - Aula 2**

## PEC 5

```text
Formularios en Angular
```

## Login UOC

```text
ohevia@uoc.edu
```

## Nombre y apellidos  

```text
Omar Hevia Arbana
```

## Comentarios

- Para generar formularios en template:


```text
ng generate component template-forms
```

- Para generar formularios reactivos:

```text
ng generate component reactive-forms
```


- Para instalar Bootstrap utilizar el siguiente comando e incluimos la importación de bootstrap en el css global:
  
```text
npm install --save bootstrap@5.3.3
```

```text
 @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
```

- Utilzar fb (Form Builder) *private* es recomendable para mantener la encapsulación, seguridad y claridad del código. Esto ayuda a asegurarnos que las dependencias inyectadas son solo accesibles dentro del nuesto componente.

- Para los formularios reactivos se debe inyectar le siguiente dependencia en el app.module.ts
  
 ```text
 import { ReactiveFormsModule } from '@angular/forms';
 ```