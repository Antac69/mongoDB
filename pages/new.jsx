import React, { useState } from "react";

const New = () => {

    const[form,setForm]=useState({title:'',plot:''})

  return (
    <>
      <div className="contaniner">
        <h1 className="my-3">Agregar Movie</h1>
        <form >
            <input
        className="form-control my-2"
        type="text"
        placeholder="Title"
        autoComplete="off"
        name="title"
        value={form.title}
        onChange={()=>} />
            <input
        className="form-control my-2"
        type="text"
        placeholder="Plot"
        autoComplete="off"
        name="plot"
        value={form.plot}
        onChange={} />
        <button className="btn btn-primary w-100" type="submit">Agregar</button>
        <Link href='/' className='btn btn-warning w-100'>
        Volver...
        </Link>
        </form>
      </div>
    </>
  );
};

export default New;
