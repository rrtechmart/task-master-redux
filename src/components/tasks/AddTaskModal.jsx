
import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/tasksSlice';


const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = ()=>{
    reset();
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    dispatch(addTask(data))
    onCancel();
  }
  return (
    <div>
      <Modal
        isOpen={isOpen} setIsOpen={setIsOpen} title='RRTechMart'>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='flex flex-col mb-5'>
            <label htmlFor="title">Title</label>
            <input className='w-full rounded-md my-2' id='title' name='name' type="text" {...register("name")} />
          </div>

          <div className='flex flex-col mb-5'>
            <label htmlFor="title">Description</label>
            <textarea className='w-full rounded-md my-2' id='description' type="text" {...register("description")} />
          </div>

          <div className='flex flex-col mb-5'>
            <label htmlFor="title">Deadline</label>
            <input className='w-full rounded-md my-2' id='date' type="date" {...register("date")} />
          </div>

          <div className='flex flex-col mb-5'>
            <label htmlFor="title">Assign To</label>
            <select className='w-full rounded-md my-2' id='assignedTo' {...register("assignedTo")}>
              <option value="Reza">Reza</option>
              <option value="Masum">Masum</option>
              <option value="Enamul">Enamul</option>
              <option value="Jahid">Jahid</option>
              <option value="Kamin">Kamin</option>
              <option value="Zadid">Zadid</option>
            </select>            
          </div>

          <div className='flex flex-col mb-5'>
            <label htmlFor="title">Priority</label>
            <select className='w-full rounded-md my-2' id='priority' {...register("priority")}>
              <option defaultValue value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>            
          </div>
          <div className='flex justify-between '>
            <button onClick={()=>onCancel()} className='bg-red-600 text-white px-4 py-1 rounded-md' type="button">Cancel</button>
            <button className='bg-blue-600 text-white px-4 py-1 rounded-md' type="submit">Submit</button>
          </div>

        </form>
      </Modal>

    </div>
  );
};

export default AddTaskModal;