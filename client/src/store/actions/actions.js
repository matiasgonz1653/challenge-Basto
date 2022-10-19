import axios from "axios";
import {
    GET_ALL_ANIMALS,
    GET_ANIMAl_BY_ID,
    REQUEST_POST,
    FIND_ANIMAL_BY_TYPE,
} from "../actions-type/types";
import swal from "sweetalert";

const base_url = "http://localhost:3001";

const createAnimal = (animal) => {
    return async (dispatch) => {
        try {
        await axios.post(`${base_url}/animals`, animal);
        swal({
            title: "Registro creado correctamente",
            icon: "success",
            buttons: "Aceptar",
        });
        dispatch(getAllAnimals());
        } catch (error) {
        console.log(error);
        swal({
            title: `Algo salió mal ${error}`,
            icon: "error",
            buttons: "Aceptar",
        });
        }
    };
};

const getAllAnimals = () => {
    return async (dispatch) => {
        try {
        const { data } = await axios.get(`${base_url}/animals`);
        dispatch({ type: GET_ALL_ANIMALS, payload: data });
        } catch (error) {
        console.log(error);
        }
    };
};

const getAnimalById = (id) => {
    return async (dispatch) => {
        try {
        const { data } = await axios.get(`${base_url}/animals/${id}`);
        dispatch({ type: GET_ANIMAl_BY_ID, payload: data });
        } catch (error) {
        console.log(error);
        }
    };
};

const updateAnimal = (id, animal) => {
    return async (dispatch) => {
        try {
        await axios.put(`${base_url}/animals/${id}`, animal);
        swal({
            title: "Se editó el registro correctamente",
            buttons: "Aceptar",
            icon: "success",
        });
        dispatch(getAllAnimals());
        } catch (error) {
        console.log(error);
        swal({
            title: "Algo salió mal al editar el registro",
            buttons: "Aceptar",
            icon: "error",
        });
        }
    };
};

const deleteAnimal = (id) => {
    return async (dispatch) => {
        try {
        const confirmDelete = await swal({
            title: "¿Seguro quieres borrar este registro?",
            buttons: {
            cancel: "No estoy seguro",
            confirm: {
                text: "Si, quiero borrarlo",
                value: true,
            },
            },
            icon: "warning",
        });
        if (confirmDelete) {
            await axios.delete(`${base_url}/animals/${id}`);
            dispatch(getAllAnimals());
        }
        } catch (error) {
        console.log(error);
        }
    };
};

const findAnimalByType = (type) => {
    return (dispatch) => {
        //When remove text from search bar fullfilled animals state again
        if (type.trim() === "") {
        dispatch(getAllAnimals());
        }
        dispatch({ type: FIND_ANIMAL_BY_TYPE, payload: type.trim() });
    };
};

const requestPost = () => {
    return { type: REQUEST_POST };
};

export {
    createAnimal,
    getAllAnimals,
    getAnimalById,
    updateAnimal,
    deleteAnimal,
    requestPost,
    findAnimalByType,
};
