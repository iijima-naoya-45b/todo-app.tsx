import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// index関数
export const getTodos = async () => {
    try {
        const responce = await axios.get(`${API_BASE_URL}/todos`);
        return responce.data;
    }   catch(error) {
            console.error(`Error while fetching todos:`, error);
            throw error;
    }
};

// create関数
export const createTodo = async (todoData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/todos`,todoData);
        return response.data;
    } catch (error) {
        console.error(`Error while creating todo:`, error);
        throw error;
    }
};

//update関数
export const updateTodo =async (todoId: number, toDodata: any) => {
    try {
        const responce = await axios.put(`${API_BASE_URL}/todos/${todoId}`, toDodata);
        return responce.data;
    }   catch (error) {
        console.error('Error while updating todo:', error)
        throw error;
    }
}

//delete関数
export const deleteTodo = async (todoId: number) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/todos/${todoId}`);
      return response.data;
    } catch (error) {
      console.error('Error while deleting todo:', error);
      throw error;
    }
  }