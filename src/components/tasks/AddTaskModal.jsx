
import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';


const AddTaskModal = ({isOpen, setIsOpen}) => {
    const {} =useForm()
    return (
        <div>
            <Modal 
              isOpen={isOpen} setIsOpen={setIsOpen} title='RRTechMart'>
                <p>This my organization in which thousands of staffs are working. I want to add each and every staff's jobs here</p>
              </Modal>
            
        </div>
    );
};

export default AddTaskModal;