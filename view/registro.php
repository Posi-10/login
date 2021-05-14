<div class="container mt-5">
  <div class="row justify-content-center mt-5">
    <div class="col-sm-4 mt-5">
      <form id="form_registro" class="mt-5">
        <div class="form-group mt-5">
          <label class="sr-only" for="input_registro_usuario">Usuario</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="fas fa-user"></i></div>
            </div>
            <input type="text" class="form-control" id="input_registro_usuario" name="input_registro_usuario" placeholder="Usuario">
          </div>
        </div>
        <div class="form-group">
          <label class="sr-only" for="input_registro_pass">Contraseña</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="fas fa-key"></i></div>
            </div>
            <input type="password" class="form-control" id="input_registro_pass" name="input_registro_pass" placeholder="Contraseña">
          </div>             
        </div>
        <span class="btn btn-info" id="btn_registro">Registro</span>
        <span class="btn btn-success" id="btn_login">Login</span>
      </form>
    </div>
  </div>
</div>
<script src="manager/manager_registro.js"></script>