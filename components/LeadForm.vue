<template>
  <div class="card">
    <div class="card-body">
      <form class="form-lead">
        <h4>¡Déjanos tus datos!</h4>
        <p>Y estarás al tanto de las novedades</p>
        <div class="form-group">
          <label for="exampleInputPassword1">Nombres y Apellidos</label>
          <input type="text" class="form-control form-control-sm" id="exampleInputPassword1" placeholder=" ">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Correo</label>
          <input
            type="email"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" "
          >
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Celular</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="exampleInputPassword1"
            placeholder=" "
          >
        </div>

        <div class="form-group custom-control custom-checkbox">
          <input type="checkbox" class=" custom-control-input" id="exampleCheck1">
          <label class="form-check-label  custom-control-label" for="exampleCheck1">
            Acepto los
            <a href="#">términos de uso de datos de la Universidad de Piura</a>
          </label>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary btn-sm">Registrarme</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.form-lead .form-group {
  margin-bottom: 0.5rem;
}

.form-lead h4 {
  margin-bottom: 0.2rem;
}

.form-lead label {
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
  /* font-weight: bold; */
  color: var(--main-color-3);
}

.form-lead .form-check-label {
  font-size: 0.8rem;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: var(--main-color-1);
  outline: 0;
  box-shadow: 0 0 0 0.2rem #c3cf6a96;
}
</style>

