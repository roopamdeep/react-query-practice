import APIClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
export default new APIClient<Todo>("/todos");
