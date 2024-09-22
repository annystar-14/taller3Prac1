const formulario = () => {
    return (
        <div className="col-md-5 mt-2">
            <form action="">
                <div className="card">
                    <div className="card-header">Formulario</div>
                    <div className="card-body">

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Num. ine:</span>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre:</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellido Paterno</span>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Telefono:</span>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Correo:</span>
                            <input type="text" className="form-control" />
                        </div>

                        {/*botones dentro del form*/}

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-primary me-md-2">Enviar</button>
                            <button type="reset" className="btn btn-secondary">Restablecer</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};
export default formulario;
