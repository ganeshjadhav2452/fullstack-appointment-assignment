import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import AppointmentContext from "../../context/AppointmentContext";

const InputForm = (props) => {

    const { setFormValues, saveAppointment, editFormValues,updateTheAppointment } = useContext(AppointmentContext)
    const [isUpdate, setIsUpdate] = useState(false)
    const [updatedState, updateTheState] = useState({

        name: "",
        phoneNumber: "",
    });


    const phoneNumberChangeHandler = (e) => {
        updateTheState({
            ...updatedState,
            phoneNumber: e.target.value,
        });
    };

    const nameChangeHandler = (e) => {
        updateTheState({
            ...updatedState,
            name: e.target.value,
        });
    };


    const getAllInputes = (e) => {
        e.preventDefault();
        const allInputs = {

            name: updatedState.name,

            phoneNumber: updatedState.phoneNumber,
        };


        setFormValues(allInputs)
        if (!isUpdate) {

            saveAppointment(allInputs)
        }
        else{
            updateTheAppointment({...allInputs,id:editFormValues.id})
            setIsUpdate(false)
        }
        updateTheState({

            name: "",

            phoneNumber: "",
        });
    };

    useEffect(() => {
        updateTheState({
            name: editFormValues.name,
            phoneNumber: editFormValues.phoneNumber
        })
        setIsUpdate(true)
    }, [editFormValues])
    return (
        <Fragment>
            <form
                onSubmit={getAllInputes}
                className="d-flex justify-content-between p-5  "
            >
                {isUpdate && <h3>update appointment</h3>}
                <input
                    onChange={nameChangeHandler}
                    value={updatedState.name}
                    type="text"
                    placeholder="Name..."
                ></input>


                <input
                    onChange={phoneNumberChangeHandler}
                    value={updatedState.phoneNumber}
                    type="number"
                    placeholder="Phone Number..."
                ></input>

                <input type="submit" className="btn btn-success" />
            </form>
        </Fragment>
    );
};

export default InputForm;