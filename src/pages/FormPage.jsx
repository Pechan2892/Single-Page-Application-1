import { useForm } from 'react-hook-form';

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input {...register("name", { required: true })} />
          {errors.name && <span>Este campo es obligatorio</span>}
        </div>
        
        <div>
          <label>Email</label>
          <input {...register("email", { 
            required: "Este campo es obligatorio",
            pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" }
          })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormPage;
