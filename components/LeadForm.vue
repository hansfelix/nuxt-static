<template>
  <div class="card">
    <div class="card-body">
      <form class="form-lead">
        <h4>¡Déjanos tus datos!</h4>
        <p>Y estarás al tanto de las novedades</p>

        <div class="row">
          <div class="form-group  col-md-6 pr-0">
            <label for="exampleInputPassword1">Nombres y Apellidos</label>
            <input
              v-model="lead.nombre"
              type="text"
              class="form-control form-control-sm"
              id="exampleInputPassword1"
              placeholder=" "
            />
          </div>
          <div class="form-group  col-md-6 ">
            <label for="exampleInputPassword1">Tipo de participante</label>
            <input
              v-model="lead.nombre"
              type="text"
              class="form-control form-control-sm"
              id="exampleInputPassword1"
              placeholder=" "
            />
          </div>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Correo</label>
          <input
            v-model="lead.email"
            type="email"
            class="form-control form-control-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" "
          />
        </div>

        <div class="row">
          <div class="form-group col-md-5 pr-0">
            <label for="exampleInputPassword1">Celular</label>
            <input
              v-model="lead.celular"
              type="text"
              class="form-control form-control-sm"
              id="exampleInputPassword1"
              placeholder=" "
            />
          </div>
          <div class="form-group col-md-7">
            <label for="exampleInputPassword1">Horario de llamada</label>
            <select
              v-model="lead.horarioLlamada"
              class="form-control form-control-sm"
              id="exampleFormControlSelect1"
            >
              <option>No me llamen</option>
              <option>06:00 - 08:00</option>
              <option>08:00 - 12:00</option>
              <option>12:00 - 02:00</option>
              <option>14:00 - 18:00</option>
              <option>18:00 - 20:00</option>
              <option>20:00 - 22:00</option>
            </select>
          </div>
        </div>

        <div class="form-group custom-control custom-checkbox">
          <input
            v-model="lead.aceptaTyC"
            type="checkbox"
            class="custom-control-input"
            id="exampleCheck1"
          />
          <label class="form-check-label custom-control-label" for="exampleCheck1">
            Acepto los
            <a href="#">términos de uso de datos de la Universidad de Piura</a>
          </label>
        </div>
        <div class="text-right">
          <button type="button" class="btn btn-primary btn-sm" @click="enviar">Registrarme</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lead: {
        nombre: "",
        email: "",
        celular: "",
        horarioLlamada: "",
        aceptaTyC: false
      }
    };
  },
  methods: {
    enviar() {
      console.log("Iniciando envío de Datos");

      let datos = this.JSON_to_URLEncoded({
        "entry.1596970866": this.lead.nombre,
        "entry.2052317302": this.lead.email,
        "entry.2107963167": this.lead.celular,
        "entry.1984622350": this.lead.horarioLlamada,
        "entry.1503614086": this.lead.aceptaTyC
      });

      var xhr = new XMLHttpRequest();

      xhr.open(
        "POST",
        "https://docs.google.com/forms/d/e/1FAIpQLSf-Rf6GcIOHfHlHYN9OrrfGeSc4FsMJ9ElVFLKzzUmNt8z7KQ/formResponse"
      );
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText !== newName) {
          alert("Something went wrong.  Name is now " + xhr.responseText);
        } else if (xhr.status !== 200) {
          alert("Request failed.  Returned status of " + xhr.status);
        }
      };
      xhr.send(datos);
    },

    JSON_to_URLEncoded(element, key, list) {
      var list = list || [];
      if (typeof element == "object") {
        for (var idx in element)
          this.JSON_to_URLEncoded(
            element[idx],
            key ? key + "[" + idx + "]" : idx,
            list
          );
      } else {
        list.push(key + "=" + encodeURIComponent(element));
      }
      return list.join("&");
    }
  }
};
</script>


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

